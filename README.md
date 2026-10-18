# Fieldnotes

A Hugo theme for people who write about their trips and their research. It looks like graph paper in light mode and
a blackboard in dark mode, and it comes with trip maps, photo galleries with a viewer, maths and code. No Node, no
build step: Hugo does everything.

- Seven presets for how the site is drawn (fieldnotes with tape, minimal, editorial, cinematic, brutalist,
  terminal, cyberpunk) and seventeen colour schemes with light and dark versions, any with any; your own as plugins
- Light-only, dark-only or both, following the visitor's system or a toggle
- Fonts from Google Fonts, backgrounds including your own SVG tile
- Hooks for your own CSS, HTML and scripts
- Home page with a photo, a greeting, social icons and a "display card" for anything you like
- Cards for posts, and link cards for projects that live elsewhere
- Trip maps from a GeoJSON file (MapTiler)
- Photo galleries from a folder of photos, with a swipe viewer and videos
- Maths (MathJax), code with light and dark colours, search engine data (JSON-LD, Open Graph)

## Try the example site

```sh
git clone https://github.com/maxfettinger/fieldnotes
cd fieldnotes
hugo server -s exampleSite
```

Open http://localhost:1313/. The card on the home page is a style playground, the Presets section shows each preset on a
page of its own, and the theme generator tries presets, schemes, fonts and backgrounds live and writes the settings. The trip map needs a MapTiler key (see [Trip maps](#trip-maps));
without one it shows a note in its place.

## Use it for your site

You need Hugo 0.158 or newer.

```sh
hugo new site my-site
cd my-site
git init
git submodule add https://github.com/maxfettinger/fieldnotes themes/fieldnotes
```

Then in `hugo.toml`:

```toml
theme = "fieldnotes"

# Two Markdown settings the theme needs but can't set itself
[markup.highlight]
  noClasses = false          # code colours as CSS classes, so dark mode can change them
[markup.goldmark.extensions.passthrough]
  enable = true              # maths reaches MathJax untouched
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

`exampleSite/hugo.toml` lists every setting with a comment. The sections below explain them.

## The home page

The home page is `content/_index.md`. Its text is the intro; the front matter adds the rest:

```yaml
---
title: "Jane Doe"
greeting: "Hi, I'm Jane,"
photo: "images/photo.jpg"        # in assets/, or next to _index.md; an SVG works too
photoAlt: "Jane hiking in front of glaciers"
displayCard: "display-card-content.html"
---
a PhD student in numerical analysis, and a cyclist in the summer.
```

Below the intro the home page lists the pages of `params.mainSections` as cards, newest first.

The **display card** is a card with your own HTML, not a link: a "now" note, a quote, a canvas with a script. Write
the HTML in `layouts/_partials/display-card-content.html` (any name, as long as `displayCard` names it).

**Social icons** sit under the intro. The name picks a [Feather icon](https://feathericons.com/):

```toml
[params]
  socialIcons = [
    { name = "github", url = "https://github.com/jane" },
    { name = "email", url = "mailto:jane@example.org" },
  ]
```

Available: github, gitlab, linkedin, instagram, twitter (or x), facebook, youtube, twitch, codepen, codesandbox,
dribbble, figma, framer, slack, trello, mail (or email), rss, globe (or website), link, phone, book-open (or scholar),
file-text (or cv). Put `socialIcons` above any `[params.something]` table: in TOML a key after a table header belongs
to that table.

## Look and feel

The look has two parts, chosen independently: a **preset** (how the site is drawn: fonts, background, corners,
cards, decoration) and a **colour scheme** (its colours, in a light and a dark version). The example site shows every preset on a page
of its own, and its theme generator tries them all live and writes the settings.

```toml
[params.style]
  preset = "cyberpunk"    # fieldnotes, minimal, editorial, cinematic, brutalist, terminal, cyberpunk
  scheme = "catppuccin"   # optional, else the preset's own
```

| Preset | How it's drawn | Its scheme |
|---|---|---|
| `fieldnotes` | graph paper, PT Serif, cards taped onto the page, photos and maps as taped prints | fieldnotes |
| `minimal` | Inter, thin borders, no pattern, no shadows, no motion, like a documentation site | ink |
| `editorial` | a newspaper: a masthead, Playfair Display over Source Serif, articles in columns between rules, drop caps | newsprint |
| `cinematic` | for photographs: Inter Tight in light weights, hairlines, sharp corners, tall galleries | cinema |
| `brutalist` | IBM Plex Mono, thick borders, hard offset shadows, square corners | ink |
| `terminal` | Omarchy's website in 8 bit: Geist and JetBrains Mono, a dot field, pixel-cut corners, a blinking cursor | omarchy |
| `cyberpunk` | a 90s anime heads-up display: steel-blue panels with thin cyan frames, a red signal light | hud |

Colour schemes, calm ones first: fieldnotes, pencil, ink, newsprint, cinema, forest, ocean, nord, gruvbox, everforest,
rose-pine, catppuccin, tokyo-night, omarchy, sakura, hud, neon. Each has a light and a dark version, with all text at
least 4.5:1 on page and cards; where an original scheme's light colours fall short, they're slightly darker here.

A page can have its own look in its front matter, for example a photo story in `cinematic`:

```yaml
style:
  preset: cinematic
```

**Your own presets and schemes.** They're plugins: a CSS file and a small data file each, in the same folders as the
theme's. Hugo looks in your site first, so a new name adds one and a theme name replaces it. Only the preset and
schemes a page uses go into its stylesheet.

| File | What it holds |
|---|---|
| `assets/css/schemes/<id>.css` | `:root[data-scheme="<id>"] { --color-bg: …; … }` for light mode and `:root[data-scheme="<id>"][data-theme="dark"] { … }` |
| `data/fieldnotes/schemes/<id>.toml` | `name`, `weight` (its place in lists), `description` |
| `assets/css/presets/<id>.css` | `:root[data-preset="<id>"] { --font-body: …; --radius-m: …; … }` and rules like `[data-preset="<id>"] .card { … }` |
| `data/fieldnotes/presets/<id>.toml` | `name`, `weight`, `description`, its default `scheme`, and the Google Fonts it loads (`fonts = ["Inter:wght@400;700"]`) |

The easiest start is the example site's theme generator: it downloads the preset you're looking at as a copy under a
name of your own. The custom properties a preset can set are in the theme's `assets/css/tokens.css` and `theme.css`;
`assets/css/main.css` explains the cascade layers that keep a preset's rules above the theme's.

**Light and dark mode.**

```toml
[params.mode]
  default = "auto"   # "light", "dark", or "auto" (the visitor's system setting)
  toggle = true      # the switch in the header; with it, the visitor's choice wins
```

A light-only site: `default = "light"` and `toggle = false`. Dark only: `"dark"` and `false`.

**Fonts.** Any family on [Google Fonts](https://fonts.google.com/) by name:

```toml
[params.fonts]
  body = "Source Serif 4"
  heading = "Inter"            # optional, else the body font
  mono = "IBM Plex Mono"       # optional, else the system's monospace
```

The theme loads the body font in regular, bold and both italics, the heading font in bold and the mono font in
regular. If a font lacks one of these, or you want other weights, set `url` to the whole Google Fonts link.
`google = false` loads nothing, for fonts you host yourself. Good to know: with Google Fonts, every visit contacts
Google's servers, which in the EU can count as sharing visitors' data.

**Colours.** Each colour has a job, and you can change any of them per mode:

```toml
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
| `primary` | headings and links |
| `secondary` | dates, summaries, captions |
| `tertiary` | small controls, the gallery's scroll bar |
| `accent` | link underlines, hovers, focus rings, the current menu item |
| `border` | card and code borders |
| `pattern` | the background's lines or dots |

**Background.** Instead of the preset's: per mode `"grid"` (graph paper), `"dots"`, `"none"`, or an image in
`assets/`. An SVG tile repeats across the page at its own size, or at `size`:

```toml
[params.background]
  light = "images/tile.svg"   # assets/images/tile.svg
  dark = "dots"
  size = "120px"
```

With `size = "cover"` the image is a photo: fixed behind the page, covering the window, under a veil of the
background colour so text stays readable: strong behind the text column, thinner toward the window's edges, where
the photo shows (`--backdrop-overlay`, from `--backdrop-veil` and `--backdrop-veil-edge`; stronger in light mode). The theme makes 1920 and 3840
px wide WebP versions for normal and sharp screens, so a 4K original is a good start. Each mode can have its own
photo, like a wallpaper that follows the time of day; in dark mode the veil is darker than the page. A page can have its own, in
its front matter, as the example site's cyberpunk page does:

```yaml
style:
  preset: cyberpunk
  background:
    light: images/neon-streets-day.jpg
    dark: images/neon-streets.jpg
    size: cover
```

**Your own CSS.** Create `assets/css/custom.css`. The theme imports it last, in its own cascade layer, so your rules
win whatever their selectors. Every size and colour is a custom property you can set there, for example
`:root { --width-content: 40rem; }`. The theme's `assets/css/tokens.css` and `theme.css` list them.

**Hooks.** Files of your own that the theme picks up. It has empty versions of the first two, and your site's file
wins when both exist:

| File in your site | What it does |
|---|---|
| `layouts/_partials/hooks/head-end.html` | HTML at the end of every page's `<head>`: analytics, a font, an early script |
| `layouts/_partials/hooks/body-end.html` | HTML at the end of every page's `<body>`: a script, a notice |
| `assets/css/custom.css` | your CSS, loaded last (above) |
| the partial named by `displayCard` | the home page's card (above) |

The example site's style playground uses all four; `exampleSite/layouts/` shows how.

**Favicon.** Put your icon in `static/` and name it:

```toml
[params.favicon]
  svg = "favicon.svg"
  ico = "favicon.ico"                 # optional: old browsers, crawlers asking for /favicon.ico
  appleTouch = "apple-touch-icon.png"  # optional: a 180 × 180 PNG for iPhone home screens
```

## Writing

Posts are Markdown files in a section (`content/posts/`). The front matter's `summary` shows on the card;
`math: true` turns on MathJax for that page (or `params.math = true` for the whole site).

A **link card** is a project that lives elsewhere, like its documentation or repository. The card links there, and
there's no page for it on your site:

```yaml
---
title: "My Library"
summary: "A small library for something."
params:
  link: https://github.com/jane/my-library
build:
  render: never
---
```

## Galleries

Make a folder next to the page's `index.md` and drop photos in. The page becomes a "page bundle":

```text
content/trips/sweden/
├── index.md
├── photos.yaml        (optional)
└── lakes/
    ├── 01-tent.jpg
    ├── 02-sunset.jpg
    ├── 03-swim.mp4
    └── 03-swim.jpg    (the video's poster)
```

```md
{{< gallery "lakes" >}}
```

Without an argument the folder is called `gallery`. The photos show in the order of their file names. JPEG, PNG, WebP
and AVIF work; HEIC from an iPhone doesn't, so export as JPEG. A click opens the viewer
([dialog-lightbox](https://github.com/maxfettinger/dialog-lightbox), loaded from jsDelivr).

`photos.yaml` next to the folder adds alt text, a caption and a place per file. The caption and place show in the
viewer. Hugo warns about photos without alt text:

```yaml
01-tent.jpg:
  alt: A small tent on a lakeshore at dusk
  caption: Our first night by the lake
  place: Lake Siljan, Sweden
```

Add `build: { publishResources: false }` to the page's front matter, so Hugo publishes only the smaller photos the
gallery uses, not your originals.

**Check your photos for location data before you commit them.** Photos from a phone carry their GPS position, and on
GitHub your repository is usually public. Hugo removes metadata from the sizes it makes, but not from the originals
in your repository. The easiest way: export from your photo app as JPEG with location turned off (in Apple Photos:
File → Export, untick "Location Information").

## Trip maps

```md
{{< trip-map geojson="route.geojson" caption="Eight days on foot" >}}
```

`geojson` is a file next to the page, in `assets/` or in `static/`. Any tool that exports GeoJSON works (most GPX
tools do). Lines, points and areas use their own colours if the file has them (`stroke`, `stroke-width`,
`marker-color`, `fill`), otherwise the colour scheme's accent. A click on a line or point shows its `name` and
`description`, in the page's colours. The map follows the page's light and dark mode: `params.map.style` (default
`topo-v4`) in light mode, `params.map.styleDark` (default `topo-v4-dark`) in dark mode, and it switches when the
visitor uses the toggle. `style` and `styleDark` on the shortcode pick other [MapTiler maps](https://www.maptiler.com/maps/),
like `style="outdoor-v4" styleDark="outdoor-v4-dark"`.

### The MapTiler key

The map needs a free key from MapTiler. The theme reads it from the environment variable `HUGO_MAPTILER_KEY` when
Hugo builds the site, so it never goes into your repository.

1. Create an account at [MapTiler](https://cloud.maptiler.com/) and copy your key.
2. In MapTiler, under the key's settings, allow only your site's address (`jane.github.io`, or your domain) and
   `localhost`. The key ends up in your published pages, as with every map on the web, and this restriction makes it
   useless anywhere else.
3. Locally: `HUGO_MAPTILER_KEY=yourkey hugo server`. Or put `export HUGO_MAPTILER_KEY=yourkey` in a `.env` file,
   add `.env` to `.gitignore`, and run `source .env` before `hugo server`.
4. On GitHub: in your repository, Settings → Secrets and variables → Actions → New repository secret, named
   `MAPTILER_KEY`. The workflow below passes it to Hugo.

The free plan is for non-commercial use and covers 5,000 map loads a month. Without a key, Hugo warns and the map's
place shows a note on how to add one.

## Publishing on GitHub Pages

Save this as `.github/workflows/pages.yml`, then in your repository's settings choose Pages → Source: GitHub Actions.

```yaml
name: Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
      - uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: "0.167.0"
      - run: hugo --minify --baseURL "https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/"
        env:
          HUGO_MAPTILER_KEY: ${{ secrets.MAPTILER_KEY }}
      - uses: actions/upload-pages-artifact@v3
        with:
          path: public
      - uses: actions/deploy-pages@v4
```

## Credits

- Icons: [Feather](https://feathericons.com/) by Cole Bemis (MIT, `assets/icons/LICENSE`)
- Photo viewer: [dialog-lightbox](https://github.com/maxfettinger/dialog-lightbox) (MIT), from jsDelivr
- Maps: [MapTiler SDK JS](https://docs.maptiler.com/sdk-js/), from MapTiler's CDN
- Default font: [PT Serif](https://fonts.google.com/specimen/PT+Serif) (OFL), from Google Fonts
- CSS reset after [Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/) and
  [Andy Bell](https://piccalil.li/blog/a-more-modern-css-reset/) (CC BY); fluid type and space computed the
  [Utopia](https://utopia.fyi/) way
- Maths: [MathJax](https://www.mathjax.org/), from jsDelivr
- Example site: the city at night behind the cyberpunk page is "Neon streets" by JINDONG H, CC0
  ([Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Neon_streets_(Unsplash).jpg), from Unsplash); the other
  photos are generated gradients. Its light-mode version (`neon-streets-day.jpg`) is the same photo with its lightness
  inverted and its hues kept

## Licence

MIT, see `LICENSE`.
