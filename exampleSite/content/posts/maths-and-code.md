---
title: "Maths and Code"
date: 2026-10-01
summary: "What a post with formulas and code looks like in Fieldnotes."
math: true
---

Inline maths like \(e^{i\pi} + 1 = 0\) and display maths:

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

Code gets the theme's colours in light and dark mode:

```python
def trapezoid(f, a, b, n):
    h = (b - a) / n
    return h * (f(a) / 2 + sum(f(a + i * h) for i in range(1, n)) + f(b) / 2)
```

> A quote, for good measure.
