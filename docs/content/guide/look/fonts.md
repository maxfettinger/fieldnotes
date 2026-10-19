---
title: Fonts
lead: Any family from Google Fonts by its name, or fonts you host yourself.
weight: 4
---

## From Google Fonts

Each preset loads its own fonts. To use others, name any family on [Google Fonts](https://fonts.google.com/):

```toml {file="hugo.toml"}
[params.fonts]
  body = "Source Serif 4"
  heading = "Inter"        # optional: else the body font
  mono = "IBM Plex Mono"   # optional: code; else the preset's
```

Fieldnotes loads the body font in regular, bold and both italics, the heading font in bold, and the mono font in
regular, all in one request.

If a family lacks one of these styles, or you want others (a light heading, a semibold body), build the link on
Google Fonts (**Get font → Get embed code**) and give Fieldnotes the whole address; it then loads only that:

```toml {file="hugo.toml"}
[params.fonts]
  body = "Inter"
  heading = "Inter"
  url = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
```

## Fonts you host yourself

Every visit to a page with Google Fonts contacts Google's servers, which in the EU can count as sharing your visitors'
data. To avoid it, download the fonts as `.woff2` files (for example from
[google-webfonts-helper](https://gwfh.mranftl.com/fonts)), put them in your site's `assets/fonts/`, describe them in
your [own CSS](/guide/customizing/your-own-css/), and turn Google Fonts off:

```toml {file="hugo.toml"}
[params.fonts]
  google = false
  body = "Source Serif 4"
```

```css {file="assets/css/custom.css"}
@font-face {
  font-family: "Source Serif 4";
  src: url("../fonts/source-serif-4-regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
/* … the same for bold and the italics */
```

The path is relative to `custom.css`. Hugo copies each font file into the site under a name with a fingerprint, so a
new version of a font gets a new address, and the address works wherever the site is published.

With `google = false` and no `body`, the preset's font names stay, and the browser shows them only if they're
installed on the visitor's device; otherwise it falls back to a system font.
