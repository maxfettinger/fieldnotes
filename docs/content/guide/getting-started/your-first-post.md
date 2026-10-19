---
title: Your first post
lead: A Markdown file in content/posts/, and it's on the home page.
weight: 3
---

## Create it

```sh
hugo new content posts/hello-world.md
```

This writes `content/posts/hello-world.md` with a title and today's date filled in:

```md {file="content/posts/hello-world.md"}
---
title: "Hello World"
date: 2026-10-19T09:00:00+02:00
draft: true
summary: ""
---
```

## Write it

Below the second `---`, write in Markdown:

```md
A first paragraph. **Bold**, *italic*, and a [link](https://gohugo.io/).

## A heading

- a list
- with two items
```

Fill in `summary`: one sentence for the post's card on the home page and in the Posts section. Without one,
Fieldnotes takes the beginning of the text.

[Markdown](/guide/writing/markdown/) shows every element and how Fieldnotes draws it.

## See it

A post with `draft: true` is only shown by `hugo server -D` (`-D` for drafts):

```sh
hugo server -D
```

When it's ready, set `draft: false` or delete the line. The post then appears on the home page and under Posts, newest
first.

## Photos in a post

Make the post a folder, a **page bundle**, so its photos sit next to it:

```text
content/posts/hello-world/
├── index.md       the post (the old hello-world.md, renamed)
└── view.jpg
```

```md
![The valley from the pass, with clouds below](view.jpg "The view on day two")
```

The text in square brackets is the alt text, read out to people who can't see the photo: always write it. The text in
quotes becomes the caption. Fieldnotes makes smaller copies for phones by itself. Next: [publish](/guide/getting-started/publish/).
