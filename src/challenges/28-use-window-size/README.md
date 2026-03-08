# useWindowSize Hook

## Description

Create a custom `useWindowSize` hook that subscribes to the browser's resize event and returns the current window dimensions.

## Requirements

- Return an object with `width` and `height` properties
- Initialize with the current `window.innerWidth` and `window.innerHeight`
- Update values when the window is resized
- Clean up the resize event listener on unmount

## Examples

```jsx
const { width, height } = useWindowSize()

return (
  <div>
    <p>Window: {width} x {height}</p>
    {width < 768 && <MobileNav />}
  </div>
)
```
