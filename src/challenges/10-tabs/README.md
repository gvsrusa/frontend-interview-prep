# Tabs

## Description

Build a tab navigation component that shows one content panel at a time, with proper ARIA roles for accessibility.

## Requirements

- Accept a `tabs` prop: array of `{ label: string, content: string | ReactNode }`
- Show the first tab's content by default
- Clicking a tab button switches to that tab's content
- Only one content panel is visible at a time
- Use `role="tablist"` on the tab button container
- Use `role="tab"` with `aria-selected` on each tab button
- Use `role="tabpanel"` on the content container

## Examples

```jsx
<Tabs tabs={[
  { label: 'HTML', content: 'HyperText Markup Language' },
  { label: 'CSS', content: 'Cascading Style Sheets' },
  { label: 'JS', content: 'JavaScript' },
]} />
```

Clicking "CSS" tab shows "Cascading Style Sheets" and hides other content.
