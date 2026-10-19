---
title: Light and dark
lead: Both with a switch, following the visitor's system, or only one of them.
weight: 3
---

```toml {file="hugo.toml"}
[params.mode]
  default = "auto"   # "light", "dark", or "auto": the visitor's system setting
  toggle = true      # the switch in the header
```

| You want | `default` | `toggle` |
|---|---|---|
| both, starting from the visitor's system setting | `"auto"` | `true` |
| both, starting light | `"light"` | `true` |
| light only | `"light"` | `false` |
| dark only | `"dark"` | `false` |
| the visitor's system setting, no switch | `"auto"` | `false` |

Without these settings a site starts light, with the switch. With the switch, the visitor's choice is remembered in their browser and wins over `default` on their next visit.
The mode is set before the page is drawn, so it never flashes the other one.
