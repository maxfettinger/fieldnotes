---
title: "Brutalist"
weight: 50
summary: "IBM Plex Mono throughout, thick borders, hard offset shadows, square corners."
style:
  preset: brutalist
---

IBM Plex Mono throughout, thick borders, hard offset shadows, square corners. In your `hugo.toml`:

```toml
[params.style]
  preset = "brutalist"
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
| preset | `brutalist` |
| light | `ink` |
| dark | `ink` |
