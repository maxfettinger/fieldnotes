---
title: "Styles and Hooks"
date: 2026-10-10
summary: "How to change the look of Fieldnotes with a few settings, and where to add your own HTML, CSS and scripts."
---

There are two ways to make Fieldnotes yours. Settings in `hugo.toml` cover the look: a preset and a colour
scheme, then fonts, background and colours on top. Hooks are files of your own that the theme picks up, for everything the settings don't cover.
The playground on the [home page]({{< relref "/" >}}) tries the settings out live.

## Settings

```toml
[params.style]
  preset = "riced"     # how it's drawn: paper, minimal, terminal, editorial, brutalist or riced
  scheme = "gruvbox"   # its colours: paper, forest, ocean, ink, neon, tokyo-night, catppuccin, gruvbox, nord,
                       # rose-pine or everforest; empty for the preset's own

[params.fonts]
  body = "Lora"        # any Google Fonts family
  heading = "Inter"    # optional

[params.background]
  light = "grid"       # grid, dots, none, or an image in assets/
  dark = "none"

[params.colors.light]
  accent = "#0b6e4f"   # any single colour of the preset, per mode
```

The preset is how the site is drawn: fonts, background, corners, cards and decoration like paper's tape. The scheme
is its colours, with a light and a dark version; the visitor switches between them with the toggle in the header.
The other settings change single parts of either.

## Hooks

| File in your site | What it does |
|---|---|
| `assets/css/custom.css` | Your CSS, loaded last: its rules win over the theme's. Every size and colour is a custom property, like `--color-accent` or `--width-content`. |
| `layouts/_partials/hooks/head-end.html` | HTML at the end of every page's `<head>`: analytics, another font, a script that has to run before the page is drawn. |
| `layouts/_partials/hooks/body-end.html` | HTML at the end of every page's `<body>`: a script, a notice. |
| a partial named by `displayCard` | The card on the home page, with any HTML you like. |

The theme has empty versions of the first three. Hugo takes your site's file over the theme's when both exist, so
creating the file is all it takes.

This example site uses all four for the playground: the display card holds the form, `head-end.html` applies the saved
choices before the page is drawn, `body-end.html` loads the form's script on the home page, and `custom.css` styles
the form.
