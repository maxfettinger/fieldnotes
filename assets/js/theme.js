// Dark mode toggle (header.html): switches data-theme on <html> and remembers the choice, which
// layouts/_partials/head/theme.html applies on the next page before it's drawn.
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

if (toggle) {
  toggle.setAttribute("aria-pressed", root.dataset.theme === "dark");
  toggle.addEventListener("click", () => {
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  });
}
