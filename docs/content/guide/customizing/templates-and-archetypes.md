---
title: Templates, shortcodes and archetypes
lead: Changing what a part of the page contains, adding your own Markdown tags, and templates for new posts.
weight: 4
---

## Your own version of a template

Every part of a page is a template in the theme's `layouts/`. Copy one to the same path in your site and change the
copy; Hugo uses yours. Get the theme's file from [its repository](https://github.com/maxfettinger/fieldnotes/tree/main/layouts)
(or from `themes/fieldnotes/layouts/` with a submodule).

| Template | What it draws |
|---|---|
| `layouts/_partials/header.html` | the header: the site's name, the menu, the light/dark switch |
| `layouts/_partials/menu.html` | the menu's links |
| `layouts/_partials/footer.html` | the footer |
| `layouts/_partials/page-header.html` | a page's breadcrumbs, title and date |
| `layouts/_partials/meta.html` | the date line under titles and on cards |
| `layouts/_partials/card.html` | a post's card in lists |
| `layouts/_partials/social.html` | the social icons |
| `layouts/_partials/home/intro.html` | the home page's photo, greeting and introduction |
| `layouts/home.html`, `list.html`, `page.html` | the home page, a section's page, a post |
| `layouts/_markup/render-image.html`, `render-link.html`, … | how Markdown's images, links, headings and tables become HTML |

### Example: reading time on every post

`meta.html` draws the date line. A copy with Hugo's reading time added:

```go-html-template {file="layouts/_partials/meta.html"}
{{- if or (not .Date.IsZero) .Draft }}
<p class="meta">
  {{- if not .Date.IsZero }}<time datetime="{{ .Date.Format "2006-01-02" }}">{{ time.Format ":date_long" .Date }}</time>{{ end }}
  {{- if .IsPage }} · {{ .ReadingTime }} min read{{ end }}
  {{- if .Draft }} · <span class="draft">Draft</span>{{ end -}}
</p>
{{- end }}
```

### Example: a footer with an imprint

```go-html-template {file="layouts/_partials/footer.html"}
<div class="wrapper site-footer-inner">
  <p>© {{ now.Year }} {{ site.Title }} · <a href="{{ "imprint/" | relURL }}">Imprint</a></p>
</div>
```

{{< callout "warning" >}}
A copied template doesn't get the theme's updates. Copy as few as you can, and when you update the theme, compare
your copies with its new versions.
{{< /callout >}}

## Your own shortcodes

A shortcode is a template you call from Markdown. Put it in your site's `layouts/_shortcodes/`. A box for a side note:

```go-html-template {file="layouts/_shortcodes/aside.html"}
<aside class="aside">{{ .InnerDeindent | .Page.RenderString (dict "display" "block") }}</aside>
```

```css {file="assets/css/custom.css"}
.aside {
  padding: var(--space-s);
  border-inline-start: 3px solid var(--color-accent);
  background: var(--color-surface);
}
```

```md
{{</* aside */>}}
Pack a spare tube, even on a short ride.
{{</* /aside */>}}
```

Hugo comes with shortcodes of its own too, such as `youtube`, `vimeo` and `figure`; see
[Hugo's shortcodes](https://gohugo.io/shortcodes/).

## Archetypes: templates for new posts

`hugo new content` fills a new file from an **archetype**. Fieldnotes has two:

- `default`: title, date, `draft: true`, an empty summary. Used for every section without one of its own.
- `trip`: a folder with a map, a gallery and `photos.yaml`, used with `--kind trip`
  ([A trip, start to finish](/guide/trips/a-trip-start-to-finish/)).

Yours go in your site's `archetypes/` and win over the theme's. An archetype named like a section is used for it:

```md {file="archetypes/posts.md"}
---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
summary: ""
math: false
---

Start with the most interesting thing.
```

```sh
hugo new content posts/what-i-learned.md
```

An archetype can be a folder (`archetypes/trip/index.md` with files next to it): `hugo new content` then makes a
page bundle with copies of the files. Shortcodes in an archetype need care, because archetypes are Go templates
themselves and would read a shortcode's opening brackets as their own: print the brackets as strings, as the theme's
[trip archetype](https://github.com/maxfettinger/fieldnotes/blob/main/archetypes/trip/index.md) does.

## Icons

The social icons are SVG files in the theme's `assets/icons/`, from [Feather](https://feathericons.com/). For a
profile Fieldnotes has no icon for, put an SVG in your site's `assets/icons/`, named like its `name` in
`socialIcons`. Draw it on a 24 × 24 grid with `stroke="currentColor"`, so it takes the text's colour.
