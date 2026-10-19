---
title: Search engines
lead: What Fieldnotes tells search engines and link previews about your site and you, without anything visible.
weight: 4
---

## On every page

- a **title** (the page's, then the site's) and a **description** (`description`, else the summary, else
  `params.description`);
- a **canonical address**, so copies of a page don't compete with it;
- **Open Graph** and **Twitter card** tags, for previews when a link is shared (Hugo's own templates), with an image
  from the page's `images` ([Front matter](/guide/reference/front-matter/));
- the page's **RSS feed** and your **favicon**.

Hugo also writes a `sitemap.xml` listing every page, and with `enableRobotsTXT = true` a `robots.txt`.

## About you

Name yourself under `params.author`:

```toml {file="hugo.toml"}
[params.author]
  name = "Jane Doe"
  alternateName = "J. Doe"
  jobTitle = "PhD student"
  image = "images/photo.jpg"
  [params.author.affiliation]
    name = "University of Example"
    url = "https://example.org/university"
```

From this, Fieldnotes writes **structured data** (JSON-LD, the format Google reads): the home page is your profile
page, about you as a person, with your social profiles from `socialIcons` as "same as" links (except email and RSS);
every post is an article by you. This helps a search for your name find your site, and connects it with your
profiles.

Google's rule is that structured data must match what visitors see, which it does here: the profiles are the icons
on your home page. You can check the result with [Schema.org's validator](https://validator.schema.org/) or Google's
[Rich Results Test](https://search.google.com/test/rich-results).

## Getting found

A new site takes days to weeks to appear in search results. [Google Search Console](https://search.google.com/search-console)
shows whether Google has found it; submitting `https://your-site/sitemap.xml` there speeds it up.
