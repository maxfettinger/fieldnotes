---
title: Link cards
lead: A project that lives elsewhere, as a card that links there.
weight: 5
---

A project with its own documentation or repository doesn't need a page on your site, only a card in your list that
links to it:

```md {file="content/projects/my-library.md"}
---
title: "My Library"
date: 2026-10-15
summary: "A small library for something."
params:
  link: https://github.com/jane/my-library
build:
  render: never
---
```

- `params.link` is where the card links, in a new tab, with a small arrow on the card.
- `build: render: never` keeps Hugo from making a page for it; the card still shows in the section's list and on the
  home page if the section is in `mainSections`. The RSS feed links to the project too.

A project with a page of its own is an ordinary post in the `projects` section.
