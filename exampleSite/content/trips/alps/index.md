---
title: "Hut to Hut in the Stubai Alps"
date: 2026-08-20
summary: "A trip post: a map from a GeoJSON file and a gallery from a folder of photos."
build:
  publishResources: false   # publish only the photo sizes the gallery uses, not the originals
---

A trip post is a page bundle: this `index.md`, the route as `route.geojson` and a folder of photos per gallery. The route is made
up for this example, and so are the photos: gradients and stick figures drawn by a script.

{{< trip-map geojson="route.geojson" caption="Three days, three huts" >}}

The map draws each day in the colour its GeoJSON feature names (`stroke`), or the colour scheme's accent, and the huts as
points (`marker-color`). Click a line or a point for its name and description.

## The lakes

The photos are the folder `lakes/`, in the order of their names; `photos.yaml` next to it has their alt text,
captions and places. The last one is a video: `06-drift.mp4` with `06-drift.jpg` as its poster.

{{< gallery "lakes" >}}

## The friends

A second gallery is a second folder, here `friends/`, with its entries in the same `photos.yaml`. Each gallery has
its own viewer: swiping stays within the folder.

{{< gallery "friends" >}}
