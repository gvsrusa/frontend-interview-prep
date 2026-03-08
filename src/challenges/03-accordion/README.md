# Accordion

## Description

Build an accordion component with vertically stacked sections that can be expanded and collapsed. Only one section should be open at a time.

## Requirements

- Accept an `items` prop: an array of `{ title: string, content: string }`
- All sections start collapsed
- Clicking a section title expands it and shows its content
- Clicking an already-expanded section collapses it
- Opening a new section closes the previously open one (single-expand mode)
- Use `aria-expanded` on toggle buttons for accessibility

## Examples

```tsx
<Accordion items={[
  { title: 'What is React?', content: 'A JavaScript library for building UIs.' },
  { title: 'What is JSX?', content: 'A syntax extension for JavaScript.' },
]} />
```

Clicking "What is React?" expands it. Clicking "What is JSX?" collapses the first and expands the second.
