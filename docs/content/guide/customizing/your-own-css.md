---
title: Your own CSS
lead: One file in your site, added after the theme's CSS, that wins over it.
weight: 1
---

## The file

Create `assets/css/custom.css` in your site. Fieldnotes adds it after its own CSS, in a cascade layer of its own
that comes last, so your rules win over the theme's whatever their selectors: no `!important`, no long selectors.

```css {file="assets/css/custom.css"}
.card-title {
  text-transform: uppercase;
}
```

## Custom properties

Most sizes and colours are custom properties (CSS variables), so a change is often one line. Some of them:

```css {file="assets/css/custom.css"}
:root {
  --width-content: 40rem;      /* the column of text (45 to 52.5rem, growing on large screens) */
  --radius-m: 0;               /* corners of cards, code blocks and the map */
  --leading: 1.7;              /* line height of text */
  --font-heading: "Inter", sans-serif;
}
```

| Property | What it is |
|---|---|
| `--width-content` | the text column's width |
| `--width-wide` | the header, photos and maps |
| `--gutter` | space at the window's edges |
| `--font-body`, `--font-heading`, `--font-mono` | the fonts |
| `--step--2` … `--step-4` | type sizes, small to large, growing with the window |
| `--space-3xs` … `--space-xl` | spacing, the same way |
| `--leading`, `--leading-tight` | line heights of text and headings |
| `--radius-s`, `--radius-m` | corners |
| `--shadow`, `--shadow-raised` | shadows of cards and prints |
| `--card-bg`, `--card-border`, `--card-padding-inline` | cards |
| `--heading-weight`, `--heading-transform`, `--heading-spacing` | headings |
| `--pattern-strength` | how strongly the background's lines or dots show |
| `--color-bg` … `--color-border` | the scheme's colours ([Backgrounds and colours](/guide/look/backgrounds-and-colours/#single-colours)) |

The full lists, with comments, are the theme's `assets/css/tokens.css` (sizes) and `assets/css/theme.css` (colours).

## Light, dark, and one preset only

Dark mode sets `data-theme="dark"` on the page, and the preset and scheme in use are named the same way, so a rule
can apply to any of them:

```css {file="assets/css/custom.css"}
/* Dark mode only */
:root[data-theme="dark"] {
  --pattern-strength: 10%;
}

/* Only with the fieldnotes preset: green tape */
:root[data-preset="fieldnotes"] {
  --tape-bg: rgb(150 200 160 / 0.7);
}
```

## Finding a selector

To find what to change, right-click the element in your browser and choose **Inspect**: the developer tools show its
classes and the rules that style it. The theme's CSS is split by component in `assets/css/components/`, one file
per part, named like its main class (`.card` in `card.css`).
