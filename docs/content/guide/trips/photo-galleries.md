---
title: Photo galleries
lead: A folder of photos becomes a row that scrolls sideways and opens in a full-screen viewer.
weight: 2
---

## A gallery

Put photos in a folder next to the post's `index.md` (the post is then a page bundle) and name the folder in the
`gallery` shortcode:

```text
content/trips/sweden/
├── index.md
├── photos.yaml
└── lakes/
    ├── 01-tent.jpg
    ├── 02-sunset.jpg
    ├── 03-swim.mp4
    └── 03-swim.jpg
```

```md
{{</* gallery "lakes" */>}}
```

Without a name, `{{</* gallery */>}}` uses a folder called `gallery`. A post can have as many galleries as it has
folders.

The photos show in the order of their file names, all the same height in a row that scrolls sideways; on a computer,
arrows at its ends scroll it, and a thin bar below shows how much more there is. Very tall photos are cropped in the
row and shown whole in the viewer.

**Formats:** JPEG, PNG, WebP and AVIF. HEIC photos from an iPhone don't work: export them as JPEG (in Apple Photos,
File → Export).

## The viewer

A click on a photo opens it large in a viewer: [dialog-lightbox](https://github.com/maxfettinger/dialog-lightbox), a
small open-source photo viewer built on the browser's own dialog element, loaded from jsDelivr.

- swipe or use the arrow keys to go through the gallery's photos;
- click a photo, or double-tap it on a phone, to zoom in; drag to look around;
- Escape, the close button, the back button or (on a phone) dragging the photo down close it.

The viewer shows the photo's number, its caption and its place. Adding `#dlb=` and a photo's file name without its
ending to the post's address opens that photo directly: `…/trips/sweden/#dlb=02-sunset`.

## Captions and alt text

`photos.yaml`, next to the gallery folders, describes each photo by its file name:

```yaml {file="photos.yaml"}
01-tent.jpg:
  alt: A small tent on a lakeshore at dusk
  caption: Our first night by the lake
  place: Lake Siljan, Sweden
02-sunset.jpg:
  alt: The sun setting over a calm lake, pines in silhouette
```

| Key | What it is |
|---|---|
| `alt` | what the photo shows, read out by screen readers: write it for every photo; Hugo warns about missing ones |
| `caption` | optional, shown in the viewer |
| `place` | optional, shown in the viewer after the caption |

One `photos.yaml` serves all of the post's galleries.

## Videos

An `.mp4` with a photo of the same name, `03-swim.mp4` and `03-swim.jpg`, is a video: the photo is its thumbnail and
the first picture before it plays. In the viewer it plays muted and inline, with play, sound and fullscreen buttons
and a progress bar. Keep videos short and small: GitHub refuses files over 100 MB, and visitors on phones load
them. A minute at 1280 pixels and 2 Mbit/s is about 15 MB.

## Sizes

Fieldnotes makes copies of every photo in WebP: 480 to 1080 pixels wide for the row, and one that fits in 1600 by
1600 pixels for the viewer. Small photos aren't enlarged.
Your originals can be any size. Add this to the post's front matter, so only the copies are published:

```yaml
build:
  publishResources: false
```

The first build after adding many photos takes a while; Hugo keeps the copies in `resources/` and reuses them.

## Your location

{{< callout "warning" >}}
**Check your photos for location data before you commit them.** Photos from a phone carry the GPS position where
they were taken: your home, a friend's house. Fieldnotes' copies have no metadata, but the originals in your
repository keep it, and a repository on GitHub is usually public.
{{< /callout >}}

The easiest way is to export photos without location: in Apple Photos, File → Export, untick "Location Information";
on Windows, a photo's Properties → Details → "Remove Properties and Personal Information". Or strip all metadata from a
folder with [ExifTool](https://exiftool.org/):

```sh
exiftool -all= -overwrite_original content/trips/sweden/lakes/
```
