---
title: Publish
lead: Your site on GitHub Pages, rebuilt by itself on every change.
weight: 4
---

GitHub Pages hosts static sites for free. A **workflow** (a recipe GitHub runs for you) builds the site with Hugo
every time you push a change, and publishes it.

## Put the site on GitHub

1. Create a free account at [github.com](https://github.com/) and a **new repository**, for example `my-site`,
   without a README.
2. In your site's folder, add a `.gitignore` file, so Hugo's output and your secrets stay out of the repository:

   ```text {file=".gitignore"}
   public/
   resources/
   .hugo_build.lock
   .env
   ```

3. Commit and push (GitHub shows these commands after you create the repository):

   ```sh
   git add .
   git commit -m "My site"
   git branch -M main
   git remote add origin https://github.com/you/my-site.git
   git push -u origin main
   ```

## The workflow

In your repository on GitHub: **Settings → Pages → Source: GitHub Actions**. Then add this file to your site and
push it:

```yaml {file=".github/workflows/pages.yml"}
name: Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: recursive   # only needed if you added the theme as a Git submodule
      - uses: actions/setup-go@v5
        with:
          go-version: stable
      - name: Install Hugo
        run: |
          curl -sSL -o "$RUNNER_TEMP/hugo.deb" https://github.com/gohugoio/hugo/releases/download/v0.167.0/hugo_extended_0.167.0_linux-amd64.deb
          sudo dpkg -i "$RUNNER_TEMP/hugo.deb"
      - uses: actions/configure-pages@v5
        id: pages
      - name: Build
        run: hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"
        env:
          HUGO_MAPTILER_KEY: ${{ secrets.MAPTILER_KEY }}   # for trip maps; see Trip maps
      - uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Under **Actions** in your repository you can watch it run. When it's done, the site is at
`https://you.github.io/my-site/`, and every push updates it within a minute or two.

## Your own domain

Under **Settings → Pages → Custom domain**, enter it, for example `jane.example.org`, and add the DNS record GitHub
asks for at your domain's provider (a `CNAME` record pointing to `you.github.io`). The workflow takes the new address
by itself.

## Other hosts

Netlify, Cloudflare Pages and Vercel build Hugo sites too. Connect your repository, with `hugo --minify` as the build
command and `public` as the output folder; set the environment variables `HUGO_VERSION` (`0.167.0`) and, for maps,
`HUGO_MAPTILER_KEY`.
