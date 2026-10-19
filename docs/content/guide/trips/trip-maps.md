---
title: Trip maps
lead: Your route on a topographic map, in the colours you choose, with a free key from MapTiler.
weight: 3
---

## A map

Put the route file next to the post's `index.md` and name it in the `trip-map` shortcode:

```md
{{</* trip-map geojson="route.geojson" caption="Eight days on foot" */>}}
```

The map shows the whole route, on MapTiler's topographic map: hills shaded, contour lines, peaks with their heights.
Readers can zoom, switch to 3D terrain, open the map full screen, and click a line or point for its name and
description. In dark mode the map is dark too, and it switches when the reader uses the toggle.

| Option | What it does |
|---|---|
| `geojson` | the route file: next to the page, in `assets/`, or in `static/` |
| `caption` | optional text under the map |
| `style` | another MapTiler map for light mode, like `outdoor-v4` or `streets-v4` (default: `params.map.style`, `topo-v4`) |
| `styleDark` | the same for dark mode (default: `params.map.styleDark`, `topo-v4-dark`) |

[MapTiler's maps](https://www.maptiler.com/maps/) lists the styles.

## The route file

The map reads **GeoJSON**, a text format for lines and points. Apps record routes as **GPX**; turning one into the
other takes a minute in the browser:

1. Export the GPX from your app or device (Strava, Komoot, Garmin Connect: each activity's menu has "Export GPX").
2. Open [geojson.io](https://geojson.io/), then **Open → File** and choose the GPX.
3. **Save → GeoJSON**, and put the file next to the post as `route.geojson`.

geojson.io shows each track as a line you can click; its table lets you add properties, like a name or a colour,
before saving.

A long trip recorded every second makes a large file, slow to load. [mapshaper](https://mapshaper.org/) makes it
smaller: open the GeoJSON, **Simplify** to about 10 %, **Export** as GeoJSON. Under a megabyte is a good size.

## Names and colours

Each line or point can carry properties. The map uses these, the
[simplestyle](https://github.com/mapbox/simplestyle-spec) names most tools write:

| Property | What it does |
|---|---|
| `name` | shown in bold when the line or point is clicked |
| `description` (or `desc`) | shown below the name |
| `stroke` | a line's colour, like `#2b6cb0` |
| `stroke-width` | a line's width in pixels (default 4) |
| `stroke-opacity` | a line's opacity, from 0 to 1 |
| `marker-color` | a point's colour |
| `fill`, `fill-opacity` | an area's colour and opacity |

Without colours, lines and points take your colour scheme's accent. To colour each day differently, make each day its
own track in the GPX (most apps export one per activity), and give each a `stroke` in geojson.io. Points work as
huts, campsites or sights: add them in geojson.io with the marker tool.

## The MapTiler key

The map needs a free key from [MapTiler](https://www.maptiler.com/). Fieldnotes reads it from an **environment
variable**, `HUGO_MAPTILER_KEY`, when Hugo builds the site, so it never goes into your repository. Without one, Hugo
warns and the map's place shows a note on how to add it.

1. **Get a key.** Create an account at [cloud.maptiler.com](https://cloud.maptiler.com/); the default key under
   **API keys** works, or create one for your site.
2. **Restrict it.** In the key's settings, under **Allowed HTTP origins**, add your site's address (`jane.github.io`
   or your domain) and `localhost`. Every map on the web shows its key in the page; this makes it useless anywhere
   else.
3. **Locally:** create a file `.env` in your site's folder (it's in the `.gitignore` from
   [Publish](/guide/getting-started/publish/)):

   ```sh {file=".env"}
   export HUGO_MAPTILER_KEY=your-key-here
   ```

   and load it before starting Hugo, in every new terminal:

   ```sh
   source .env
   hugo server
   ```

   (On Windows PowerShell: `$env:HUGO_MAPTILER_KEY = "your-key-here"`, then `hugo server`.)

4. **On GitHub:** in your repository, **Settings → Secrets and variables → Actions → New repository secret**, named
   `MAPTILER_KEY`, with the key as its value. The [workflow](/guide/getting-started/publish/#the-workflow) passes it to
   Hugo.

MapTiler's free plan is for non-commercial sites and covers 5,000 map loads a month; zooming and 3D on a loaded map
are free. Over the limit, the maps stop until the next month.

## Settings for every map

```toml {file="hugo.toml"}
[params.map]
  style = "topo-v4"           # light mode
  styleDark = "topo-v4-dark"  # dark mode
  sdk = "4.2.0"               # the version of MapTiler's map library
```

For a light map in both modes, set `styleDark` to the same style as `style`. A style can also be the address of a
`style.json`, for a map you designed in MapTiler's editor.
