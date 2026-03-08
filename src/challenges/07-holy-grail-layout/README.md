# Holy Grail Layout

## Description

Build the classic "Holy Grail" layout — a common web layout pattern with a header, three-column body, and footer using CSS Grid or Flexbox.

## Requirements

- **Header**: spans the full width at the top
- **Three-column body**:
  - Left **Navigation** column (fixed width, e.g., 200px)
  - Center **Main Content** column (takes remaining space)
  - Right **Sidebar** column (fixed width, e.g., 200px)
- **Footer**: spans the full width at the bottom
- The layout should fill at least the viewport height (`min-height: 100vh`)
- Use pure CSS (inline styles or CSS-in-JS) — no external CSS framework

## Examples

```
+---------------------------+
|         Header            |
+------+-----------+--------+
| Nav  |   Main    | Sidebar|
|      |  Content  |        |
+------+-----------+--------+
|         Footer            |
+---------------------------+
```
