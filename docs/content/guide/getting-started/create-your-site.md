---
title: Create your site
lead: A new Hugo project, Fieldnotes added to it, and the settings to make it run.
weight: 2
---

## A new project

In a terminal, go to the folder where your site should live, then:

```sh
hugo new project my-site
cd my-site
git init
```

`my-site` is now a folder with `content/`, `assets/`, `layouts/`, `static/` and a settings file, `hugo.toml`. Open
the folder in your editor.

## Add the theme

{{< tabs group="install" >}}
{{< tab "Hugo module (recommended)" >}}
Make your site a module (the name is any address-like name for your site; it doesn't have to exist):

```sh
hugo mod init github.com/you/my-site
```

Name Fieldnotes in `hugo.toml`, in the settings below, under `[module]`, then download it:

```sh
hugo mod get github.com/maxfettinger/fieldnotes@latest
```

Later, `hugo mod get -u` updates the theme to its newest version.
{{< /tab >}}
{{< tab "Git submodule" >}}
Put a copy of the theme's repository into `themes/fieldnotes`:

```sh
git submodule add https://github.com/maxfettinger/fieldnotes.git themes/fieldnotes
```

In the settings below, replace the `[module]` block with one line, `theme = "fieldnotes"`.

Later, `git submodule update --remote` updates the theme. Whoever clones your site needs
`git clone --recurse-submodules`.
{{< /tab >}}
{{< /tabs >}}

## The settings

Replace everything in `hugo.toml` with this, then put in your name and description:

```toml {file="hugo.toml"}
baseURL = "https://example.org/"
locale = "en-US"
title = "Jane Doe"
disableKinds = ["taxonomy", "term"]   # no tag pages: Fieldnotes doesn't show tags yet

[module]
  [[module.imports]]
    path = "github.com/maxfettinger/fieldnotes"

# Four Markdown settings Fieldnotes needs but can't set itself
[markup.highlight]
  noClasses = false                          # code in the colour scheme's colours
[markup.goldmark.parser]
  wrapStandAloneImageWithinParagraph = false # a photo with a title gets a caption
[markup.goldmark.extensions.passthrough]
  enable = true                              # maths reaches MathJax untouched
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]

[[menus.main]]
  name = "Posts"
  pageRef = "/posts"
  weight = 10
[[menus.main]]
  name = "About"
  pageRef = "/about"
  weight = 20

[params]
  description = "Jane Doe writes about long bike trips and numerical analysis."
  mainSections = ["posts"]
  socialIcons = [
    { name = "github", url = "https://github.com/jane" },
    { name = "email", url = "mailto:jane@example.org" },
  ]

  [params.author]
    name = "Jane Doe"
```

`baseURL` is your site's address once it's online; for now any address works. `mainSections` names the sections
whose posts the home page lists. The [configuration reference](/guide/reference/configuration/) lists every setting.

{{< callout "warning" >}}
In TOML, a line after a `[table]` header belongs to that table. Keep plain `[params]` lines like `socialIcons` above
`[params.author]` and any other `[params.something]`, or they end up inside it.
{{< /callout >}}

## The home page and an About page

Create `content/_index.md`, your home page:

```md {file="content/_index.md"}
---
title: "Jane Doe"
greeting: "Hi, I'm Jane,"
---

a PhD student in numerical analysis, and a cyclist in the summer.
```

and `content/about.md`:

```md {file="content/about.md"}
---
title: "About"
---

A few sentences about you.
```

## Run it

```sh
hugo server
```

Hugo builds the site and keeps it up to date while you edit. Open the address it prints, usually
[http://localhost:1313/](http://localhost:1313/). Stop it with Ctrl+C.

The home page shows your greeting and the icons, the header the menu. Next: [your first
post](/guide/getting-started/your-first-post/).
