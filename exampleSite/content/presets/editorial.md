---
title: "Editorial"
weight: 30
summary: "Playfair Display headings over Source Serif text, a large masthead, articles in two columns between rules, drop caps."
style:
  preset: editorial
---

Playfair Display headings over Source Serif text, a large masthead, articles in two columns between rules, drop caps. In your `hugo.toml`:

```toml
[params.style]
  preset = "editorial"
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
| preset | `editorial` |
| scheme | `newsprint` |
