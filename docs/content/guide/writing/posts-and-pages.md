---
title: Posts and pages
lead: Sections, front matter, drafts, the menu, and pages like About.
weight: 2
---

## Sections

Each folder in `content/` is a **section**: `posts/`, `trips/`, `projects/`, or any name you like. A section has its
own page listing its posts as cards, newest first. Give it a title with an `_index.md`:

```md {file="content/posts/_index.md"}
---
title: "Posts"
---

Optional text above the list.
```

## A post's front matter

```md
---
title: "Across the Pyrenees"
date: 2026-06-14
lastmod: 2026-07-02
summary: "Eight days from the Atlantic to the Mediterranean, mostly uphill."
draft: false
---
```

| Key | What it does |
|---|---|
| `title` | the post's heading and name everywhere |
| `date` | when it was written; sorts the lists, newest first |
| `lastmod` | when it was last changed: more than a day after `date`, the post says "updated" with this date |
| `summary` | the text on the post's card; without it, the beginning of the post |
| `draft` | `true` keeps the post off the published site; `hugo server -D` shows it, marked "Draft" |
| `description` | the description for search engines, if it should differ from the summary |
| `math` | `true` turns on maths for this post ([Maths and code](/guide/writing/maths-and-code/)) |
| `style` | a look of its own for this page ([Presets](/guide/look/presets/#a-page-of-its-own)) |

All keys are in the [front matter reference](/guide/reference/front-matter/).

## A post with files: page bundles

A post with photos, a map or other files is a folder with an `index.md`:

```text
content/posts/across-the-pyrenees/
├── index.md
├── col-du-tourmalet.jpg
└── route.geojson
```

Link the files by their names from `index.md`. Hugo publishes the folder's files with the post.

## The menu

The links in the header are your site's main menu, in `hugo.toml`. `pageRef` is a page's path in `content/`:

```toml {file="hugo.toml"}
[[menus.main]]
  name = "Posts"
  pageRef = "/posts"
  weight = 10
[[menus.main]]
  name = "Trips"
  pageRef = "/trips"
  weight = 20
[[menus.main]]
  name = "About"
  pageRef = "/about"
  weight = 30
```

The link of the section you're in is marked. For a link to another site, use `url = "https://…"` instead of
`pageRef`.

## Pages outside sections

A file at the top of `content/`, like `content/about.md`, is a page of its own: no date, not in any list. Use it for
About, a CV, an imprint.

## Feeds

The home page and every section have an RSS feed (`/index.xml`, `/posts/index.xml`), linked in the page's head, so feed
readers find them. An `rss` social icon can point to it.
