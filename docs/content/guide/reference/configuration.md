---
title: Configuration
lead: Every setting Fieldnotes reads from hugo.toml, with its default.
weight: 1
---

## Hugo's settings Fieldnotes needs

A theme can't set Markdown settings for your site, so these go in your `hugo.toml`:

```toml {file="hugo.toml"}
[markup.highlight]
  noClasses = false                          # code colours as CSS classes, coloured by the scheme
[markup.goldmark.parser]
  wrapStandAloneImageWithinParagraph = false # captions for photos with a title
[markup.goldmark.extensions.passthrough]
  enable = true                              # maths reaches MathJax untouched
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

And Hugo's own settings that Fieldnotes uses:

| Setting | What it does here |
|---|---|
| `baseURL` | the site's address: links, feeds, search engines |
| `title` | the site's name in the header, the footer and the browser tab |
| `locale` | the page's language, and how dates are written (`en-US`: October 19, 2026) |
| `menus.main` | the header's links ([The menu](/guide/writing/posts-and-pages/#the-menu)) |
| `pagination.pagerSize` | posts per page in lists (default 10) |
| `enableRobotsTXT` | `true` publishes Hugo's `robots.txt` |
| `disableKinds` | `["taxonomy", "term"]` leaves out tag and category pages, which Fieldnotes doesn't link to yet |

## Params

Under `[params]`. Plain keys first, then the tables (`[params.style]` and so on), because in TOML a key after a table
header belongs to that table.

| Param | Default | What it does |
|---|---|---|
| `description` | `""` | the site's description for search engines and link previews |
| `mainSections` | the largest section | the sections whose posts the home page lists |
| `math` | `false` | MathJax on every page; a page's `math` wins |
| `socialIcons` | none | the home page's icons: a list of `{ name, url, title }` ([Social icons](/guide/writing/home-page/#social-icons)) |
| `images` | none | a fallback image for link previews, a path in `assets/` |
| `author.name` | none | your name for search engines ([Search engines](/guide/reference/search-engines/)) |
| `author.alternateName` | none | another form of your name |
| `author.jobTitle` | none | what you do |
| `author.image` | the home photo | a photo of you for search engines |
| `author.affiliation.name`, `.url` | none | where you work or study |
| `style.preset` | `"fieldnotes"` | the [preset](/guide/look/presets/) |
| `style.scheme` | the preset's | the [colour scheme](/guide/look/colour-schemes/) |
| `mode.default` | `"light"` | `"light"`, `"dark"` or `"auto"` ([Light and dark](/guide/look/light-and-dark/)) |
| `mode.toggle` | `true` | the light/dark switch in the header |
| `fonts.body`, `.heading`, `.mono` | the preset's | [fonts](/guide/look/fonts/) from Google Fonts, by family name |
| `fonts.url` | `""` | a whole Google Fonts address, instead of the one Fieldnotes builds |
| `fonts.google` | `true` | `false` loads no fonts from Google |
| `background.light`, `.dark` | the preset's | `"grid"`, `"dots"`, `"none"` or an image in `assets/` ([Backgrounds](/guide/look/backgrounds-and-colours/)) |
| `background.size` | `""` | the size an image tile repeats at, like `"120px"` |
| `colors.light.*`, `colors.dark.*` | the scheme's | single colours: `bg`, `surface`, `text`, `primary`, `secondary`, `tertiary`, `accent`, `border`, `pattern` |
| `favicon.svg` | `"favicon.svg"` | the favicon, a file in `static/` (the theme has one) |
| `favicon.ico` | `"favicon.ico"` | the favicon for older browsers |
| `favicon.appleTouch` | `"apple-touch-icon.png"` | a 180 × 180 PNG for phone home screens |
| `map.style` | `"topo-v4"` | the [trip maps'](/guide/trips/trip-maps/) MapTiler style in light mode |
| `map.styleDark` | `"topo-v4-dark"` | the same in dark mode |
| `map.sdk` | `"4.2.0"` | the version of MapTiler's map library |
| `gallery.lightbox` | `"0.3.1"` | the version of [dialog-lightbox](https://github.com/maxfettinger/dialog-lightbox), the photo viewer |

## Environment variables

| Variable | What it does |
|---|---|
| `HUGO_MAPTILER_KEY` | the MapTiler key for trip maps, read when Hugo builds the site ([The MapTiler key](/guide/trips/trip-maps/#the-maptiler-key)) |

## A complete example

The [demo's `hugo.toml`](https://github.com/maxfettinger/fieldnotes/blob/main/exampleSite/hugo.toml) sets almost
everything, with a comment on each line.
