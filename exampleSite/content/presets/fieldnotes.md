---
title: "Fieldnotes"
weight: 10
summary: "Graph paper and ink, PT Serif, cards taped onto the page, photos and maps as taped prints."
style:
  preset: fieldnotes
---

Graph paper and ink, PT Serif, cards taped onto the page, photos and maps as taped prints. In your `hugo.toml`:

```toml
[params.style]
  preset = "fieldnotes"
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
| preset | `fieldnotes` |
| light | `fieldnotes` |
| dark | `fieldnotes` |
