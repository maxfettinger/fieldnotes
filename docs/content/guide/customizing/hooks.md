---
title: Hooks
lead: Empty templates in the theme that you fill with HTML of your own, on every page.
weight: 2
---

| File in your site | Where it goes |
|---|---|
| `layouts/_partials/hooks/head-end.html` | the end of `<head>`: analytics, a font, a script that must run early |
| `layouts/_partials/hooks/body-end.html` | the end of `<body>`: a script, comments, a notice |

The theme has empty versions; yours replace them. The [display card](/guide/writing/home-page/#the-display-card) on the
home page is a hook too, and [your own CSS](/guide/customizing/your-own-css/) the hook for styles.

## Analytics

A privacy-friendly counter like [GoatCounter](https://www.goatcounter.com/) or [Plausible](https://plausible.io/),
only on the published site, not while you write:

```go-html-template {file="layouts/_partials/hooks/head-end.html"}
{{ if hugo.IsProduction }}
<script data-goatcounter="https://jane.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
{{ end }}
```

## Comments

[giscus](https://giscus.app/) keeps comments in your GitHub repository's Discussions. Configure it on its site, then
paste the script it gives you, only on posts:

```go-html-template {file="layouts/_partials/hooks/body-end.html"}
{{ if and .IsPage .Section }}
<section class="wrapper" style="margin-block-end: 3rem">
  <script src="https://giscus.app/client.js"
          data-repo="jane/my-site" data-repo-id="…" data-category="Comments" data-category-id="…"
          data-mapping="pathname" data-theme="preferred_color_scheme"
          crossorigin="anonymous" async></script>
</section>
{{ end }}
```

`.IsPage .Section` is true for a post in a section, not for the home page or About. Hooks are Hugo templates, so
everything in [Hugo's template docs](https://gohugo.io/templates/) works in them.
