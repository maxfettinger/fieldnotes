---
title: Markdown
lead: Every Markdown element, and what Fieldnotes does with it.
weight: 3
---

Fieldnotes reads Hugo's Markdown: CommonMark with GitHub's tables, task lists, strikethrough and footnotes. The
[demo's Markdown post](https://fieldnotes.maxfettinger.com/posts/writing-in-markdown/) shows everything on this page
in each preset.

## Headings

```md
## A chapter
### A part of it
```

A post's title is its `#` heading, so start at `##`. Headings get a `#` link to themselves on hover, so readers can
link to a chapter.

## Text and links

```md
**bold**, *italic*, ~~struck out~~, `code`

[another post](/posts/across-the-pyrenees/)
[a chapter on this page](#photos)
[the GPX file](route.gpx)
[Hugo](https://gohugo.io/)
```

- A link to a page, written as its path in `content/`, becomes that page's address, wherever the site is published.
- A file next to the page (in its bundle) is linked by its name.
- A link to another site opens in a new tab, and screen readers say so.

## Photos

```md
![The valley from the pass, clouds below](view.jpg "The view on day two")
```

- **Alt text** in square brackets: what the photo shows, for people who can't see it. Always write it.
- **The address**: a photo next to the page, in its bundle; or in `assets/`; or a full web address.
- **A title** in quotes, optional: for a photo alone in its paragraph, it becomes a caption under the photo.

A photo in the page's bundle or in `assets/` gets copies from 480 to 1600 pixels wide in WebP; each browser loads the
one that fits its screen, and only when it scrolls into view. Its width and height are known, so the text doesn't
jump while it loads. Photos are framed in the preset's style: white prints on the graph paper, thick borders in
brutalist.

{{< callout >}}
The caption needs `wrapStandAloneImageWithinParagraph = false` under `[markup.goldmark.parser]` in your
`hugo.toml`, as in the [starter settings](/guide/getting-started/create-your-site/#the-settings). Without it, the
title is the text a mouse pointer shows.
{{< /callout >}}

For many photos, use a [gallery](/guide/trips/photo-galleries/).

## Lists and quotes

```md
- an item
- another

1. first
2. second

- [x] done
- [ ] to do

> A quote, with a line in the accent colour beside it.
```

## Tables

```md
| Day | From | To | Distance |
|---|---|---|---:|
| 1 | Hendaye | Saint-Jean-Pied-de-Port | 74 km |
```

A colon on the right of the separator (`---:`) aligns the column to the right, for numbers. A table wider than the
screen scrolls sideways in its own box on phones.

## Footnotes

```md
The hut was full.[^1]

[^1]: In August, book a month ahead.
```

The note's number links to the note at the end of the post, and the note links back.

## A rule

Three dashes alone on a line, with empty lines around them, draw a line across the text:

```md
---
```

## Code

Fenced code, with the language after the backticks, gets colours from your scheme and a copy button:

````md
```python
def hello():
    print("hello")
```
````

More in [Maths and code](/guide/writing/maths-and-code/#code).

## HTML

Hugo leaves raw HTML in Markdown out, for safety. For things Markdown can't do, write a
[shortcode](/guide/customizing/templates-and-archetypes/#your-own-shortcodes).
