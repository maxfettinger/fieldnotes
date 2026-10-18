---
title: "Cyberpunk"
weight: 70
summary: "A heads-up display from a 90s anime: steel-blue panels with thin cyan frames and a red signal light, over a city at night."
style:
  preset: cyberpunk
  background:
    light: images/neon-streets-day.jpg
    dark: images/neon-streets.jpg
    size: cover
---

A heads-up display from a 90s anime: steel-blue panels with thin cyan frames and a red signal light. Behind this page
is a photo of a city at night ("Neon streets" by JINDONG H, CC0), and in light mode the same city by day: the photo
with its lightness turned round and its colours kept, like a wallpaper that follows the time of day. In your
`hugo.toml`:

```toml
[params.style]
  preset = "cyberpunk"

[params.background]
  light = "images/neon-streets-day.jpg"   # a photo in assets/, one per mode
  dark = "images/neon-streets.jpg"
  size = "cover"
```

## A heading

Body text with **bold**, *italic* and a [link](#a-heading). Inline `code`, and a list:

- the first item
- a second item
- and a third

> A quote, for good measure. It stands apart from the text around it.

```python
def trapezoid(f, a, b, n):
    h = (b - a) / n
    return h * (f(a) / 2 + sum(f(a + i * h) for i in range(1, n)) + f(b) / 2)
```

### A smaller heading

| Setting | Value |
|---|---|
| preset | `cyberpunk` |
| scheme | `hud` |
