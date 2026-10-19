---
title: Backgrounds and colours
lead: Graph paper, dots, nothing or your own tile behind the page, and any single colour changed per mode.
weight: 5
---

## The background

Each preset has a background: graph paper (fieldnotes), dots (terminal) or none. Choose another per mode:

```toml {file="hugo.toml"}
[params.background]
  light = "grid"   # "grid", "dots", "none", or an image in assets/
  dark = "dots"
```

The lines and dots take the scheme's `pattern` colour, faint enough to read text on.

### Your own tile

An image in `assets/` repeats across the page. An SVG tile is ideal: small, sharp at every size, and it can be drawn
in any editor (Inkscape, Figma, Affinity) or by hand. Give it a size if it shouldn't repeat at its own:

```toml {file="hugo.toml"}
[params.background]
  light = "images/tile.svg"   # assets/images/tile.svg
  dark = "dots"
  size = "120px"
```

Keep tiles quiet: low contrast with the page, so text stays easy to read. A page can have its own background in its
front matter:

```yaml
style:
  background:
    light: images/waves.svg
    dark: none
```

## Single colours

Change any of a scheme's nine colours, for light and dark mode separately:

```toml {file="hugo.toml"}
[params.colors.light]
  accent = "#0b6e4f"
[params.colors.dark]
  accent = "#5fd3a8"
```

| Name | What it colours |
|---|---|
| `bg` | the page |
| `surface` | cards, code blocks, the map before it loads |
| `text` | body text |
| `primary` | headings, links, keywords in code |
| `secondary` | dates, summaries, captions, comments in code |
| `tertiary` | small controls: page numbers, back to top, the gallery's bar |
| `accent` | link underlines, hovers, focus rings, the current menu item, strings in code, the photo viewer's labels, map routes |
| `border` | card and code borders |
| `pattern` | the background's lines or dots |

{{< callout >}}
Check the contrast of a colour you change: text needs at least 4.5:1 against `bg` and `surface`, lines and focus
rings 3:1. [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/) tells you in a second.
{{< /callout >}}
