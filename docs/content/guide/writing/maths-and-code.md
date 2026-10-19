---
title: Maths and code
lead: Formulas with MathJax, and code in your colour scheme's colours.
weight: 4
---

## Turning maths on

Two things: Markdown must leave formulas alone, and the page must load MathJax.

The first is the passthrough setting in `hugo.toml`, part of the [starter
settings](/guide/getting-started/create-your-site/#the-settings):

```toml {file="hugo.toml"}
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

The second, per page in its front matter:

```md
---
title: "Error estimates"
math: true
---
```

or for every page with `params.math = true` in `hugo.toml` (a page can then say `math: false`). MathJax loads only
on pages with maths turned on.

## Writing formulas

LaTeX, between `\(` and `\)` in a sentence, and between `$$` lines on its own:

```md
Euler's identity \(e^{i\pi} + 1 = 0\) and an integral:

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$
```

`\[` and `\]` work for formulas on their own line too. Dollar signs in a sentence (`$x$`) don't, so prices like $5
stay prices.

## Long formulas on phones

In a sentence, a formula breaks across lines like words. A formula on its own line that is too wide for a phone
scrolls sideways in its own box, and so does one in a sentence that can't break, so the page never scrolls sideways.

## Code

````md
```python
def trapezoid(f, a, b, n):
    h = (b - a) / n
    return h * (f(a) / 2 + sum(f(a + i * h) for i in range(1, n)) + f(b) / 2)
```
````

Code takes its colours from the colour scheme: comments in its secondary colour, keywords in its primary colour,
strings and numbers in its accent. Every code block has a copy button in its top-right corner (on hover with a
mouse, always on touch screens).

Hugo's options for code work, for example highlighted lines and line numbers:

````md
```go {hl_lines=[2] linenos=true}
func main() {
	fmt.Println("hello")
}
```
````

Hugo highlights [hundreds of languages](https://gohugo.io/content-management/syntax-highlighting/#languages).
