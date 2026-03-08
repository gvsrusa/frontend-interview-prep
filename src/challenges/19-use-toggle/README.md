# useToggle Hook

## Description

Create a custom `useToggle` hook that manages a boolean state and provides a function to toggle it between `true` and `false`.

## Requirements

- The hook should accept an optional initial boolean value (default: `false`)
- Return a tuple of `[value, toggle]`
- The `toggle` function should flip the current boolean value
- The toggle function reference should remain stable across re-renders

## Examples

```tsx
const [isOpen, toggleOpen] = useToggle()       // starts false
const [isOn, toggleOn] = useToggle(true)        // starts true

toggleOpen() // isOpen becomes true
toggleOpen() // isOpen becomes false
```
