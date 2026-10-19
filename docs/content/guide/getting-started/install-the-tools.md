---
title: Install the tools
lead: Hugo builds the site, Git keeps its history and publishes it, Go lets Hugo download the theme.
weight: 1
---

## Hugo

Fieldnotes needs Hugo 0.158 or newer, in its **extended** edition (it processes your photos).

{{< tabs group="os" >}}
{{< tab "macOS" >}}
With [Homebrew](https://brew.sh/):

```sh
brew install hugo
```
{{< /tab >}}
{{< tab "Windows" >}}
In PowerShell or Windows Terminal:

```sh
winget install Hugo.Hugo.Extended
```
{{< /tab >}}
{{< tab "Linux" >}}
Download the `.deb` or `.tar.gz` with "extended" in its name from
[Hugo's releases](https://github.com/gohugoio/hugo/releases/latest), or:

```sh
sudo snap install hugo
```
{{< /tab >}}
{{< /tabs >}}

Check it, in a new terminal window:

```sh
hugo version
```

It should print a version of 0.158.0 or higher, with `+extended` in it.

## Git

Git keeps the history of your site and is how you publish it.

{{< tabs group="os" >}}
{{< tab "macOS" >}}
```sh
xcode-select --install
```

or `brew install git`.
{{< /tab >}}
{{< tab "Windows" >}}
```sh
winget install Git.Git
```
{{< /tab >}}
{{< tab "Linux" >}}
```sh
sudo apt install git
```

(or your distribution's package manager)
{{< /tab >}}
{{< /tabs >}}

## Go

Go lets Hugo download Fieldnotes as a **Hugo module**, the setup these docs recommend: updating the theme is then one
command. If you'd rather not install Go, add the theme as a Git submodule instead; [Create your
site](/guide/getting-started/create-your-site/#add-the-theme) shows both.

{{< tabs group="os" >}}
{{< tab "macOS" >}}
```sh
brew install go
```
{{< /tab >}}
{{< tab "Windows" >}}
```sh
winget install GoLang.Go
```
{{< /tab >}}
{{< tab "Linux" >}}
Follow [Go's installation guide](https://go.dev/doc/install).
{{< /tab >}}
{{< /tabs >}}

## An editor

Any text editor works. [Visual Studio Code](https://code.visualstudio.com/) is free and shows Markdown and TOML
with colours, which helps spot mistakes.
