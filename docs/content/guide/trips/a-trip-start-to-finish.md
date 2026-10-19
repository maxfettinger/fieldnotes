---
title: A trip, start to finish
lead: From a new folder to a post with a map and galleries, using the theme's trip template.
weight: 1
---

## 1. Create the post

Fieldnotes comes with a template (an **archetype**) for trips:

```sh
hugo new content --kind trip trips/pyrenees-by-bike
```

This creates a folder with two files:

```text
content/trips/pyrenees-by-bike/
├── index.md       the post, with a map and a gallery ready to fill in
└── photos.yaml    alt text, captions and places for the photos
```

`index.md` starts as a draft, with `publishResources: false`, so Hugo publishes only the smaller copies of your photos,
not the originals.

## 2. Add the route

Export your route as GPX from the app you recorded it with (Strava, Komoot, Garmin Connect, a GPS device), turn it
into GeoJSON, and save it as `route.geojson` in the folder. [Trip maps](/guide/trips/trip-maps/#the-route-file) shows
how, and how to colour each day.

## 3. Add photos

Make a folder for each part of the trip, for example `part-1/`, and copy the photos in. Name them so they sort in the
order they should appear, like `01-start.jpg`, `02-coast.jpg`. Then, in `index.md`, a gallery per folder:

```md
{{</* gallery "part-1" */>}}
```

[Photo galleries](/guide/trips/photo-galleries/) covers videos, captions and location data.

## 4. Describe the photos

In `photos.yaml`, write what each photo shows, for people who can't see it, and if you like a caption and a place:

```yaml {file="photos.yaml"}
01-start.jpg:
  alt: Two loaded bikes leaning on the sea wall in Hendaye at sunrise
  caption: Day one, before the first climb
  place: Hendaye, France
```

Hugo warns about photos without alt text when it builds.

## 5. Write and publish

Write the text around the map and galleries, set `draft: false`, and push. If the map shows a note instead of the
route, it needs [a MapTiler key](/guide/trips/trip-maps/#the-maptiler-key).
