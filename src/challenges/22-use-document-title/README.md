# useDocumentTitle Hook

## Description

Create a custom `useDocumentTitle` hook that dynamically updates the browser tab title. Optionally restore the original title when the component unmounts.

## Requirements

- Accept a `title` string parameter
- Update `document.title` whenever the parameter changes
- Optionally restore the previous title on unmount
- Use `useEffect` for the side effect

## Examples

```jsx
useDocumentTitle('Dashboard')        // Tab shows "Dashboard"
useDocumentTitle(`Messages (${count})`) // Tab updates reactively

// When component unmounts, the previous title is restored
```
