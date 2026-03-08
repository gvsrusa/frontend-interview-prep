# useKeyPress Hook

## Description

Create a custom `useKeyPress` hook that tracks whether a specific keyboard key is currently pressed. Returns `true` while the key is held down and `false` when released.

## Requirements

- Accept a `targetKey` string (e.g., `'Enter'`, `'Escape'`, `'a'`)
- Return a boolean indicating if the key is currently pressed
- Listen for `keydown` and `keyup` events on the window
- Clean up event listeners on unmount
- Only respond to the specified target key

## Examples

```tsx
const isEnterPressed = useKeyPress('Enter')
const isSpacePressed = useKeyPress(' ')

// isEnterPressed is true while Enter key is held down
// Returns to false when Enter is released
```
