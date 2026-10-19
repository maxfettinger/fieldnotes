---
title: Front matter
lead: The keys Fieldnotes reads at the top of a page.
weight: 2
---

## Every page

| Key | What it does |
|---|---|
| `title` | the page's heading and its name in lists, the browser tab and link previews |
| `date` | when it was written: shown under the title, sorts lists newest first |
| `lastmod` | when it changed: more than a day after `date`, shown as "updated" |
| `summary` | the text on the page's card in lists |
| `description` | the description for search engines and link previews; else the summary |
| `draft` | `true` keeps the page off the published site |
| `math` | `true` loads MathJax for the page ([Maths and code](/guide/writing/maths-and-code/)) |
| `images` | images for link previews, like `["cover.jpg"]` (a file next to the page or in `assets/`) |
| `style.preset` | the page's own [preset](/guide/look/presets/#a-page-of-its-own) |
| `style.scheme` | the page's own colour scheme |
| `style.background` | the page's own background: `light`, `dark`, `size` as in `params.background` |
| `params.link` | for a [link card](/guide/writing/link-cards/): where its card links |
| `build` | Hugo's build options: `publishResources: false` for trips, `render: never` for link cards |

Without `images`, link previews use a file next to the page whose name contains `feature`, `cover` or `thumbnail`,
then `params.images`.

Hugo's other keys work as usual: `slug` and `url` (the page's address), `aliases` (old addresses that redirect),
`weight` (sorts before the date), `linkTitle` (a shorter name for menus).

## The home page

`content/_index.md` also reads:

| Key | What it does |
|---|---|
| `greeting` | the heading next to the photo; else the site's title |
| `photo` | your photo: a file next to `_index.md` or in `assets/` |
| `photoAlt` | what the photo shows |
| `displayCard` | a partial in `layouts/_partials/` to show on a card ([The display card](/guide/writing/home-page/#the-display-card)) |

Its text is the introduction next to the photo.

## An example

```yaml
---
title: "Across the Pyrenees"
date: 2026-06-14
lastmod: 2026-07-02
summary: "Eight days from the Atlantic to the Mediterranean, mostly uphill."
images: ["tourmalet.jpg"]
math: false
style:
  preset: cinematic
build:
  publishResources: false
---
```
