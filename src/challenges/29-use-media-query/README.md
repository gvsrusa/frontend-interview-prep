# useMediaQuery Hook

## Description

Create a custom `useMediaQuery` hook that reactively matches a CSS media query and returns whether it currently matches. Updates in real-time as the viewport changes.

## Requirements

- Accept a media query string (e.g., `'(max-width: 768px)'`)
- Return a boolean indicating whether the query currently matches
- Use `window.matchMedia` to create and observe the query
- Update the result when the media query match status changes
- Clean up the listener on unmount or when the query changes

## Examples

```tsx
const isMobile = useMediaQuery('(max-width: 768px)')
const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

return isMobile ? <MobileLayout /> : <DesktopLayout />
```
