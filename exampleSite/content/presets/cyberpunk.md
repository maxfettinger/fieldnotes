---
title: "Cyberpunk"
weight: 70
summary: "A heads-up display from a 90s anime: steel-blue panels with thin cyan frames, mono labels and a red signal light."
style:
  preset: cyberpunk
---

A heads-up display from a 90s anime: steel-blue panels with thin cyan frames, mono labels and a red signal light. In your `hugo.toml`:

```toml
[params.style]
  preset = "cyberpunk"
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
