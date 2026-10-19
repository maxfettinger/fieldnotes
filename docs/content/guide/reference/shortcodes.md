---
title: Shortcodes
lead: The two shortcodes Fieldnotes adds, and their options.
weight: 3
---

## gallery

A folder of photos and videos next to the page, as a row that opens in the viewer. [Photo
galleries](/guide/trips/photo-galleries/) explains it.

```md
{{</* gallery */>}}
{{</* gallery "lakes" */>}}
```

| Option | Default | |
|---|---|---|
| the folder's name | `gallery` | a folder next to the page's `index.md` |

Alt text, captions and places come from `photos.yaml` next to the folder.

## trip-map

A route on a map. [Trip maps](/guide/trips/trip-maps/) explains it.

```md
{{</* trip-map geojson="route.geojson" caption="Eight days on foot" */>}}
```

| Option | Default | |
|---|---|---|
| `geojson` | none | the route: a GeoJSON file next to the page, in `assets/` or in `static/` |
| `caption` | none | text under the map |
| `style` | `params.map.style` | a MapTiler style or a `style.json` address, for light mode |
| `styleDark` | `params.map.styleDark` | the same for dark mode |

## Hugo's own

Hugo's built-in shortcodes work too: `youtube`, `vimeo`, `figure`, `highlight`, `details` and more. See
[Hugo's shortcodes](https://gohugo.io/shortcodes/).
