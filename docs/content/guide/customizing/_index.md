---
title: Customizing
lead: Changing anything the settings don't cover, without touching the theme's files.
weight: 5
---

## How Hugo finds a file

Your site and the theme have the same folders: `layouts/`, `assets/`, `static/`, `archetypes/`, `data/`. When Hugo
needs a file, it looks in your site first and in the theme second. So a file in your site with the same path as one
of the theme's **replaces** it, and a file with a new path **adds** to it:

```text
my-site/
├── assets/css/custom.css                 your CSS, added after the theme's
├── layouts/_partials/footer.html         replaces the theme's footer
├── layouts/_partials/hooks/head-end.html fills the theme's empty hook
└── archetypes/posts.md                   a template for new posts
```

Never edit the theme's own files: with a Hugo module you don't have them, and with a submodule the next update
overwrites them.

From the smallest change to the largest:

1. [Your own CSS](your-own-css/): colours, sizes, anything visual.
2. [Hooks](hooks/): analytics, comments, a script on every page.
3. [Your own presets and schemes](presets-and-schemes/): a whole look of your own.
4. [Templates, shortcodes and archetypes](templates-and-archetypes/): change what a part of the page contains, add
   your own tags for Markdown, and templates for new posts.
