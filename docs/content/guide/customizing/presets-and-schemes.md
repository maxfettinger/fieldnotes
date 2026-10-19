---
title: Your own presets and schemes
lead: A look of your own as a plugin, a CSS file and a small data file, in your site's folders.
weight: 3
---

Presets and schemes are plugins: each is a CSS file and a data file. The theme's sit in its `assets/css/presets/`,
`assets/css/schemes/` and `data/fieldnotes/`; yours go in the same folders of your site. A new name adds one; a theme
preset's name replaces it. Only the preset and scheme a page uses end up in its stylesheet.

## A colour scheme

Two files. The CSS sets the nine colours ([what each does](/guide/look/backgrounds-and-colours/#single-colours)) for
light mode, and again for dark mode:

```css {file="assets/css/schemes/heather.css"}
/* Heather: pale lilac and plum; a dark moor */
:root[data-scheme="heather"] {
    --color-bg: #f6f2f7;
    --color-surface: #fdfbfd;
    --color-text: #2d2430;
    --color-primary: #4a2a55;
    --color-secondary: #66586b;
    --color-tertiary: #e5dce8;
    --color-accent: #9b2f6a;
    --color-border: #e6dee9;
    --pattern-color: #b39bbd;
}

:root[data-scheme="heather"][data-theme="dark"] {
    --color-bg: #1d1820;
    --color-surface: #251f29;
    --color-text: #e6dee9;
    --color-primary: #f1e9f4;
    --color-secondary: #b3a6b8;
    --color-tertiary: #362d3b;
    --color-accent: #f29ac8;
    --color-border: #342b38;
    --pattern-color: #6e5f74;
}
```

The data file gives it a name and a place in lists such as the demo's playground:

```toml {file="data/fieldnotes/schemes/heather.toml"}
name = "Heather"
weight = 200
description = "pale lilac and plum; a dark moor"
```

Use it with `scheme = "heather"` under `[params.style]`. Check every text colour's contrast against `bg`, `surface` and
`tertiary` (at least 4.5:1) before you publish.

## A preset

A preset sets how things are drawn: fonts, corners, shadows, cards, the background, and any rules for the page's
parts. The easiest start is a copy: the demo's [theme generator](https://fieldnotes.maxfettinger.com/generator/)
downloads the preset you're looking at under a name of your own, as both files.

```css {file="assets/css/presets/notebook.css"}
/* Notebook: a lined notebook, rounded cards, a handwritten heading font */
:root[data-preset="notebook"] {
    --font-body: "Literata", Georgia, serif;
    --font-heading: "Caveat", cursive;
    --heading-weight: 600;
    --radius-m: 1rem;
    --shadow: none;
    --card-border: 1px dashed var(--color-border);
}

/* Rules for parts of the page, only with this preset */
[data-preset="notebook"] .card-title {
    font-size: var(--step-3);
}
```

```toml {file="data/fieldnotes/presets/notebook.toml"}
name = "Notebook"
weight = 200
description = "A lined notebook, rounded cards, a handwritten heading font."
scheme = "pencil"
fonts = ["Literata:ital,wght@0,400;0,700;1,400", "Caveat:wght@600"]
```

| Key | What it is |
|---|---|
| `name`, `description` | how lists show it |
| `weight` | its place in lists, lower first; the theme's presets use 10 to 60 |
| `scheme` | its colour scheme, used unless a site or page names another |
| `fonts` | the Google Fonts it loads, as family and styles in Google's form (`Family:wght@400;700`) |

The custom properties a preset can set are in the theme's `assets/css/tokens.css` and `theme.css`; `assets/css/main.css`
explains the cascade layers that put a preset's rules above the theme's components. The theme's presets in
`assets/css/presets/` are the best examples: `minimal.css` is short, `fieldnotes.css` shows tape and prints.

## Trying it

Give a single page the new look in its front matter, then switch the whole site once you like it:

```yaml
style:
  preset: notebook
```
