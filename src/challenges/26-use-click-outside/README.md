# useClickOutside Hook

## Description

Create a custom `useClickOutside` hook that detects clicks outside of a given ref element and calls a handler function. Commonly used for closing dropdowns, modals, and popovers.

## Requirements

- Accept a `ref` (React ref object) and a `handler` callback
- Listen for mousedown (and optionally touchstart) events on the document
- Call the handler when the click target is outside the ref element
- Do nothing when clicking inside the ref element
- Clean up event listeners on unmount

## Examples

```jsx
const dropdownRef = useRef(null)
useClickOutside(dropdownRef, () => setIsOpen(false))

return (
  <div ref={dropdownRef}>
    <p>Dropdown content - clicking outside closes this</p>
  </div>
)
```
