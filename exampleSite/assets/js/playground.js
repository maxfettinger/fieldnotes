// Style playground and theme generator (_partials/playground.html): every change is applied at once
// (window.playground, from hooks/head-end.html), saved in the browser, and written out as the hugo.toml lines that
// make it a site's look. On the generator page also: your own colours, written as a scheme of your own (two files),
// and the current preset as a copy under your scheme's name, to change. "Back to the site's settings" forgets it all.
const form = document.querySelector(".playground");

if (form) {
  const root = document.documentElement;
  const has = (name) => Boolean(form.elements[name]);
  const choices = {
    preset: form.dataset.preset,
    light: form.dataset.light,
    dark: form.dataset.dark,
    font: "",
    background: "",
    name: "my-scheme",
    colours: { light: {}, dark: {} },
    ...playground.load(),
  };
  const mode = () => (root.dataset.theme === "dark" ? "dark" : "light");
  const own = () => Object.keys(choices.colours.light).length + Object.keys(choices.colours.dark).length > 0;
  let observer;

  // The colours in effect for a mode, read from the page: switch the mode for a moment (no paint happens in between)
  function coloursOf(m) {
    const before = root.dataset.theme;
    if (m === "dark") root.dataset.theme = "dark";
    else delete root.dataset.theme;
    const style = getComputedStyle(root);
    const values = Object.fromEntries(playground.colours.map((k) => [k, style.getPropertyValue(`--color-${k}`).trim()]));
    if (before) root.dataset.theme = before;
    else delete root.dataset.theme;
    observer?.takeRecords(); // these switches aren't the visitor's: don't react to them
    return values;
  }

  // A colour as #rrggbb for the colour inputs (the page may give rgb() or a short hex)
  function hex(value) {
    const probe = document.createElement("span");
    probe.style.color = value;
    document.body.append(probe);
    const [r, g, b] = getComputedStyle(probe).color.match(/\d+/g).map(Number);
    probe.remove();
    return "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("");
  }

  function fillForm() {
    for (const name of ["preset", "light", "dark", "font", "background", "name"]) if (has(name)) form.elements[name].value = choices[name];
    if (has("color-bg")) {
      const current = coloursOf(mode());
      for (const k of playground.colours) form.elements[`color-${k}`].value = hex(current[k]);
    }
  }

  // Your scheme: the colours in effect in each mode, with yours on top
  function schemeCss() {
    const block = (m, selector) => {
      const values = { ...coloursOf(m), ...choices.colours[m] };
      return `${selector} {\n${playground.colours.map((k) => `    --color-${k}: ${values[k]};`).join("\n")}\n}\n`;
    };
    const id = choices.name;
    return `/* ${id}: made with Fieldnotes' theme generator */\n`
      + block("light", `:root[data-light="${id}"]:not([data-theme="dark"])`) + "\n"
      + block("dark", `:root[data-theme="dark"][data-dark="${id}"]`);
  }

  const schemeToml = () => `name = "${choices.name}"\nweight = 200\ndescription = "made with the theme generator"\n`;

  function render() {
    const scheme = own() ? choices.name : null;
    const lines = ["[params.style]", `  preset = "${choices.preset}"`,
      `  light = "${scheme || choices.light}"`, `  dark = "${scheme || choices.dark}"`];
    if (choices.font) lines.push("[params.fonts]", `  body = "${choices.font}"`);
    if (choices.background) lines.push("[params.background]", `  light = "${choices.background}"`, `  dark = "${choices.background}"`);
    form.parentElement.querySelector(".playground-config code").textContent = lines.join("\n");

    const files = document.querySelector(".playground-files");
    if (!files) return;
    files.hidden = !own();
    document.querySelector(".playground-download-scheme").hidden = !own();
    if (own()) {
      document.querySelector(".playground-scheme-css").textContent = `/* assets/css/schemes/${choices.name}.css */\n` + schemeCss();
      document.querySelector(".playground-scheme-toml").textContent = `# data/fieldnotes/schemes/${choices.name}.toml\n` + schemeToml();
    }
  }

  function download(name, text) {
    const link = Object.assign(document.createElement("a"), {
      href: URL.createObjectURL(new Blob([text], { type: "text/plain" })),
      download: name,
    });
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  function update() {
    playground.apply(choices);
    playground.save(choices);
    render();
  }

  form.addEventListener("change", (event) => {
    const { name, value } = event.target;
    if (name.startsWith("color-")) return;
    if (name === "name") choices.name = value.toLowerCase().replace(/[^a-z0-9-]/g, "-") || "my-scheme";
    else choices[name] = value;
    // A new preset brings its own colour schemes; they can be changed afterwards
    if (name === "preset") Object.assign(choices, { light: playground.presets[value].light, dark: playground.presets[value].dark });
    update();
    if (name === "preset" || name === "light" || name === "dark") fillForm();
  });

  form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    if (!name.startsWith("color-")) return;
    choices.colours[mode()][name.slice(6)] = value;
    update();
  });

  // The mode switch: the colour inputs show the other mode's colours
  observer = new MutationObserver(fillForm);
  observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  document.querySelector(".playground-reset").addEventListener("click", () => {
    try { localStorage.removeItem(playground.key); } catch {}
    location.reload();
  });

  document.querySelector(".playground-download-scheme")?.addEventListener("click", () => {
    download(`${choices.name}.css`, schemeCss());
    download(`${choices.name}.toml`, schemeToml());
  });

  // The preset as a starting point of your own: its CSS with its name replaced, and its data file
  document.querySelector(".playground-download-preset")?.addEventListener("click", async () => {
    const sources = JSON.parse(document.getElementById("playground-sources").textContent);
    const source = sources[choices.preset];
    const id = choices.name;
    const css = (await (await fetch(source.css)).text()).replaceAll(`data-preset="${choices.preset}"`, `data-preset="${id}"`);
    const { name, weight, ...rest } = source.data;
    const toml = [`name = "${id}"`, "weight = 200", ...Object.entries(rest).map(([k, v]) => `${k} = ${JSON.stringify(v)}`)].join("\n") + "\n";
    download(`${id}.css`, `/* assets/css/presets/${id}.css: made from the ${name} preset */\n` + css);
    download(`${id}.toml`, `# data/fieldnotes/presets/${id}.toml\n` + toml);
  });

  fillForm();
  render();
}
