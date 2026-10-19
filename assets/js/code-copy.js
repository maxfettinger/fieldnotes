// A copy button on every code block (Hugo's highlighted .highlight blocks). It sits in the block's top-right corner,
// shown on hover and keyboard focus (always on touch screens, components/code.css), and says "Copied" for a moment.
for (const block of document.querySelectorAll(".highlight")) {
  const code = block.querySelector("pre code") ?? block.querySelector("pre");
  if (!code) continue;
  const button = Object.assign(document.createElement("button"), {
    type: "button",
    className: "code-copy",
    textContent: "Copy",
  });
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent.replace(/\n$/, ""));
      button.textContent = "Copied";
    } catch {
      button.textContent = "Select and copy";
    }
    setTimeout(() => (button.textContent = "Copy"), 1500);
  });
  block.append(button);
}
