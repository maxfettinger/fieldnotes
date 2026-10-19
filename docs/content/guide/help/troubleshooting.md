---
title: Troubleshooting
lead: Symptoms, their usual causes, and the fix.
weight: 1
---

## Building

**`hugo: command not found`, or "requires Hugo 0.158.0 or newer".** Hugo isn't installed, or an old one is. See
[Install the tools](/guide/getting-started/install-the-tools/), then open a new terminal and check `hugo version`.

**"module … not found" or "go: command not found".** The theme is a Hugo module, which needs Go. Install Go, or add
the theme as a Git submodule instead ([Create your site](/guide/getting-started/create-your-site/#add-the-theme)).

**The site has no styles at all.** Hugo didn't find the theme. Check the `[module]` block (or `theme = "fieldnotes"`
with a submodule) and that `hugo mod get` ran.

**A setting has no effect.** Most often TOML: a line after `[params.something]` belongs to that table. Move plain
`[params]` lines above all `[params.…]` tables.

**A change doesn't show while `hugo server` runs.** Stop it with Ctrl+C and start it again; after changing
`hugo.toml`, a data file or a new template, the running server sometimes misses it.

## Writing

**Maths shows as plain text with backslashes.** The passthrough setting is missing from `hugo.toml`, or the page
lacks `math: true` ([Maths and code](/guide/writing/maths-and-code/)).

**Code has no colours.** `noClasses = false` under `[markup.highlight]` is missing.

**A photo's title isn't shown as a caption.** `wrapStandAloneImageWithinParagraph = false` under
`[markup.goldmark.parser]` is missing, or the photo shares its paragraph with text.

**A post doesn't appear.** It's a draft (`draft: true`), its date is in the future, or its section isn't in
`mainSections`. `hugo server -D` shows drafts.

**HTML in a post is missing.** Hugo leaves raw HTML in Markdown out on purpose; write a
[shortcode](/guide/customizing/templates-and-archetypes/#your-own-shortcodes) instead.

## Trips

**"gallery: … can't be processed (heic)".** HEIC photos can't be processed; export them as JPEG.

**Warnings about photos without alt text.** Write an `alt` for each in `photos.yaml`
([Photo galleries](/guide/trips/photo-galleries/#captions-and-alt-text)).

**The map shows "The map needs a MapTiler key".** `HUGO_MAPTILER_KEY` wasn't set when Hugo built the site: run
`source .env` before `hugo server`, or add the `MAPTILER_KEY` secret on GitHub ([The MapTiler
key](/guide/trips/trip-maps/#the-maptiler-key)).

**The map stays grey or blank online.** Your site's address isn't among the key's allowed origins in MapTiler, or the
month's free map loads are used up. Your browser's developer console (right-click → Inspect → Console) names the
cause.

## Publishing

**The published site has no styles, or links lead to the wrong place.** `baseURL` doesn't match the address. With
the [workflow](/guide/getting-started/publish/#the-workflow), the address comes from GitHub; check that Pages' source
is "GitHub Actions".

**The workflow fails at "hugo".** Its log under **Actions** shows Hugo's error, the same you'd see locally: run
`hugo` on your computer to reproduce it.
