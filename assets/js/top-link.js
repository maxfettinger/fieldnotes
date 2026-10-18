// Back to top (footer.html): shown once the page is scrolled down by more than a screen
const link = document.querySelector(".top-link");

if (link) {
  const update = () => link.toggleAttribute("data-visible", window.scrollY > window.innerHeight);
  window.addEventListener("scroll", update, { passive: true });
  update();
}
