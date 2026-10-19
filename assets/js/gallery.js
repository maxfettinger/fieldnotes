// Galleries (gallery shortcode) and photos in a text: the bar that shows how far a gallery is scrolled, the buttons
// that scroll it, and the photo viewer, dialog-lightbox (MIT), imported from jsDelivr (the URL is the dialog's
// data-module, in the version params.gallery.lightbox), on the page's one <dialog> (_partials/lightbox.html), with the
// photo's caption and place below it. A module, loaded only on pages with a gallery or such a photo (head/gallery.html).
// The video's controls are an overlay template the library copies into every video slide, so they need no code.
const dialog = document.querySelector("dialog.lightbox");
const { lightbox } = dialog ? await import(dialog.dataset.module) : {};
const captionText = dialog?.querySelector(".lightbox-text");
const captionPlace = dialog?.querySelector(".lightbox-place");

const smooth = () => (matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");

for (const gallery of document.querySelectorAll(".gallery")) {
  const track = gallery.querySelector(".gallery-track");

  // Scroll buttons for mice (in the shortcode, hidden until now); disabled at the ends of the row
  const controls = gallery.querySelector(".gallery-controls");
  const buttons = [...controls.querySelectorAll("button")];
  controls.hidden = false;
  for (const button of buttons) {
    button.addEventListener("click", () =>
      track.scrollBy({ left: Number(button.dataset.direction) * track.clientWidth * 0.8, behavior: smooth() }),
    );
  }
  // The bar below (in the shortcode, hidden until now): only when the row is wider than the window
  const progress = gallery.querySelector(".gallery-progress");
  const update = () => {
    const { scrollLeft, clientWidth, scrollWidth } = track;
    buttons[0].disabled = scrollLeft <= 1;
    buttons[1].disabled = scrollLeft + clientWidth >= scrollWidth - 1;
    progress.hidden = scrollWidth <= clientWidth + 1;
    progress.style.setProperty("--start", scrollLeft / scrollWidth);
    progress.style.setProperty("--size", clientWidth / scrollWidth);
  };
  track.addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();

  // The viewer: one per gallery, so swiping stays within it; no loop, it stops at the ends
  if (!dialog) continue;
  const box = lightbox({ gallery: track, dialog });
  box.on("change", ({ link }) => {
    delete dialog.dataset.single;
    // The caption and place from photos.yaml, in the photo's hidden figcaption
    const edge = link.closest("figure")?.querySelector("figcaption");
    captionText.textContent = edge?.querySelector("[data-caption]")?.textContent.trim() ?? "";
    captionPlace.textContent = edge?.querySelector("[data-place]")?.textContent.trim() ?? "";
  });
}

// Photos in a post's text (_markup/render-image.html): each opens alone in the viewer, its caption the figure's, without
// the counter (lightbox.css)
for (const link of dialog ? document.querySelectorAll("a[data-photo]") : []) {
  const box = lightbox({ gallery: link.parentElement, dialog });
  box.on("change", () => {
    dialog.dataset.single = "";
    captionText.textContent = link.closest("figure")?.querySelector("figcaption")?.textContent.trim() ?? "";
    captionPlace.textContent = "";
  });
}
