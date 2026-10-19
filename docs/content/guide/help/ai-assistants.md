---
title: Working with an AI assistant
lead: Giving an assistant like ChatGPT, Claude or Copilot the context to change your site well.
weight: 2
---

AI assistants are good at the small tasks a site needs: a CSS change, a shortcode, a workflow fix. They do better
with the right context, because what they learned about Hugo and this theme may be out of date.

**Give it these docs.** They're available as plain text for exactly this:
[llms.txt](https://fieldnotes.maxfettinger.com/docs/llms.txt) lists every page, and
[llms-full.txt](https://fieldnotes.maxfettinger.com/docs/llms-full.txt) has all of them in one file, to attach or
paste. Each page also has a Markdown version: add `index.md` to its address.

**Leave instructions in your site.** Coding assistants read a file named `AGENTS.md` at the top of your repository
(Claude Code reads `CLAUDE.md`). A few lines save explaining the same things every time:

```md {file="AGENTS.md"}
# My site

A Hugo site with the Fieldnotes theme (a Hugo module: github.com/maxfettinger/fieldnotes).
Docs for the theme: https://fieldnotes.maxfettinger.com/docs/llms-full.txt

- Don't edit the theme. Change the look in assets/css/custom.css and hugo.toml; override templates by copying
  them to the same path in layouts/.
- Templates use Hugo 0.146+ names: layouts/_partials/, _shortcodes/, _markup/. Read Hugo's current docs
  (https://gohugo.io/documentation/) before writing template code.
- Check every change with `hugo server` and `hugo --printPathWarnings`.
- Never commit .env or put the MapTiler key in a file; it comes from HUGO_MAPTILER_KEY.
```

**Review what it changes.** Run `hugo server` and look at the result, in light and dark mode and on a phone-sized
window, before you commit. Keep secrets like your MapTiler key out of the chat.
