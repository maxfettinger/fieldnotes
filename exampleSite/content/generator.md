---
title: "Theme Generator"
---

Pick a preset and colour schemes, a font and a background, and change single colours. The page shows it at once,
and below the form are the lines for your `hugo.toml`. Your own colours become a scheme of your own: two small files
to put into your site. To change how things are drawn, download the preset as a copy under your scheme's name and
edit it in your site's `assets/css/presets/`.

{{< generator >}}

## How the files fit together

| File in your site | What it is |
|---|---|
| `hugo.toml` | which preset and schemes the site uses (the lines above) |
| `assets/css/schemes/<name>.css` | a colour scheme: one block for light mode, one for dark mode |
| `data/fieldnotes/schemes/<name>.toml` | its name for menus like this one |
| `assets/css/presets/<name>.css` | a preset: fonts, background, corners, cards, and rules for any part of the page |
| `data/fieldnotes/presets/<name>.toml` | its name, its Google Fonts and its default schemes |

Hugo looks in your site first and in the theme second, so a file of your own with a theme preset's name replaces it,
and a new name adds one. Only the preset and schemes a page uses end up in its stylesheet.
