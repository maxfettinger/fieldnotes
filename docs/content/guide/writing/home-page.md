---
title: The home page
lead: A photo, a greeting, a few sentences about you, your profiles, an optional card of your own, and your latest posts.
weight: 1
---

The home page is `content/_index.md`. Its text is the introduction next to your photo; its front matter adds the rest:

```md {file="content/_index.md"}
---
title: "Jane Doe"
description: "Jane Doe writes about long bike trips and numerical analysis."
greeting: "Hi, I'm Jane,"
photo: "images/photo.jpg"
photoAlt: "Jane hiking in front of glaciers"
displayCard: "now.html"
---

a PhD student in numerical analysis, and a cyclist in the summer.
```

| Key | What it does |
|---|---|
| `title` | the page's title in the browser tab and for search engines; also the greeting if `greeting` is empty |
| `greeting` | the large heading next to the photo |
| `photo` | your photo: a file next to `_index.md` or in `assets/`, like `assets/images/photo.jpg` |
| `photoAlt` | what the photo shows, for people who can't see it |
| `displayCard` | a partial of your own to show on a card under the introduction (below) |
| `description` | the home page's description for search engines |

## The photo

Any JPEG, PNG or WebP works. Fieldnotes crops it to a square (Hugo keeps the part with the most detail) and makes
copies for normal and sharp screens, so a large photo is fine. Crop it to a square yourself if the result cuts off
the wrong part. An SVG drawing is used as it is.

## Social icons

The icons under the introduction come from `params.socialIcons` in `hugo.toml`, in their order:

```toml {file="hugo.toml"}
[params]
  socialIcons = [
    { name = "github", url = "https://github.com/jane" },
    { name = "linkedin", url = "https://www.linkedin.com/in/jane" },
    { name = "scholar", url = "https://scholar.google.com/citations?user=…" },
    { name = "email", url = "mailto:jane@example.org" },
  ]
```

The `name` picks the icon: github, gitlab, linkedin, instagram, twitter (or x), facebook, youtube, twitch, codepen,
codesandbox, dribbble, figma, framer, slack, trello, mail (or email), rss, globe (or website), link, phone,
book-open (or scholar), file-text (or cv). An unknown name gets a link icon. Add `title` to change the text a mouse
pointer shows (`{ name = "globe", url = "…", title = "My blog" }`). Profiles open in a new tab.

The same list tells search engines which profiles are yours ([Search engines](/guide/reference/search-engines/)).

## The display card

A card under the introduction with any HTML you like, not a link: a "now" note, a quote, a small drawing with a
script. Name a partial in `displayCard` and write it in your site's `layouts/_partials/`:

```html {file="layouts/_partials/now.html"}
<h2>Now</h2>
<p>Writing up chapter three, and planning a ride across the Pyrenees in June.</p>
```

The card takes the preset's card style, tape and all. The [demo's](https://fieldnotes.maxfettinger.com/) display card
holds the style playground.

## The list of posts

Below the introduction, the home page lists the pages of `params.mainSections`, newest first, ten at a time:

```toml {file="hugo.toml"}
[params]
  mainSections = ["posts", "trips"]

[pagination]
  pagerSize = 10
```

Without `mainSections`, Hugo picks the section with the most pages.
