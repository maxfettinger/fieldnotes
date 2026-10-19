// A copy button on every code block (Hugo's highlighted .highlight blocks): an icon in the block's top-right corner,
// shown on hover and keyboard focus and always on touch screens (components/code.css). After copying it shows a
// check for a moment and says "Copied" to screen readers. The icons are Feather's copy and check (assets/icons/).
const icon = (paths) =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const copyIcon = icon('<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>');
const checkIcon = icon('<polyline points="20 6 9 17 4 12"/>');

const blocks = document.querySelectorAll(".highlight");
const status = Object.assign(document.createElement("p"), { className: "visually-hidden" });
status.setAttribute("aria-live", "polite");
if (blocks.length) document.body.append(status);

for (const block of blocks) {
  const code = block.querySelector("pre code") ?? block.querySelector("pre");
  if (!code) continue;
  const button = Object.assign(document.createElement("button"), {
    type: "button",
    className: "code-copy",
    title: "Copy code",
    innerHTML: copyIcon + checkIcon,
  });
  button.setAttribute("aria-label", "Copy code");
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent.replace(/\n$/, ""));
      button.dataset.copied = "";
      status.textContent = "Copied";
    } catch {
      status.textContent = "Couldn't copy: select the code and copy it";
    }
    setTimeout(() => {
      delete button.dataset.copied;
      status.textContent = "";
    }, 1500);
  });
  block.append(button);
}
