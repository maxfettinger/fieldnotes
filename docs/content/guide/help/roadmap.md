---
title: Roadmap
lead: What Fieldnotes doesn't do yet, and may, if people need it.
weight: 3
---

Fieldnotes 1.0 does what a personal site with trips and research notes needs. These are left out for now. If you need
one, [open an issue](https://github.com/maxfettinger/fieldnotes/issues) and say what for: features get built on
demand.

| Feature | Today | Notes |
|---|---|---|
| Comments | add [giscus](https://giscus.app/) with a [hook](/guide/customizing/hooks/#comments) | built in, with a setting |
| Search | none | [Pagefind](https://pagefind.app/), which needs no server |
| Tags and categories | Hugo makes a page per tag, in the list layout | tags on cards and posts, linked to their pages |
| Translations | the theme's few words are English | multilingual sites, translated labels |
| Table of contents | none | for long posts, beside the text on wide screens |
| Reading time | [a template override](/guide/customizing/templates-and-archetypes/#example-reading-time-on-every-post) | a setting |
| Related posts | none | Hugo's related content, under each post |
| Elevation profile | none | under the trip map, from the route's heights |
| GPX files | convert to GeoJSON | read GPX directly |
| Maps without a key | MapTiler needs one | a keyless map provider as an option |
| Galleries in a grid | a scrolling row | a grid layout as an option |
| Newsletter sign-up | a hook | a form for a common provider |

Already there, and easy to miss: [light and dark maps](/guide/trips/trip-maps/), [videos in
galleries](/guide/trips/photo-galleries/#videos), [your own presets and schemes](/guide/customizing/presets-and-schemes/),
[a trip template](/guide/trips/a-trip-start-to-finish/), and these docs as [llms.txt](https://fieldnotes.maxfettinger.com/docs/llms.txt).
