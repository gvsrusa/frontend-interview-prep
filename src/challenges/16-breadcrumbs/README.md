# Breadcrumbs

## Description

Build a dynamic breadcrumb navigation component from an array of route data, with proper semantic markup and accessibility.

## Requirements

- Accept an `items` prop: array of `{ label: string, href: string }`
- Accept an optional `separator` prop (default `/`)
- All items except the last are rendered as **links** (`<a>`)
- The last item is the **current page** — rendered as plain text with `aria-current="page"`
- Separators between items should have `aria-hidden="true"`
- Wrap in `<nav aria-label="breadcrumb">` with an `<ol>` inside

## Examples

```jsx
<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Laptop' },
]} separator=">" />
```

Renders: Home > Products > **Laptop** (Laptop is not a link)
