# usePrevious Hook

## Description

Create a custom `usePrevious` hook that returns the previous value of a given state or prop. This is useful for comparing current and previous values to determine what changed.

## Requirements

- Accept any value as a parameter
- Return the value from the previous render
- Return `undefined` on the first render (no previous value exists)
- Use `useRef` to persist the previous value without causing re-renders

## Examples

```tsx
const [count, setCount] = useState(0)
const prevCount = usePrevious(count)

// First render:  count = 0, prevCount = undefined
// After setCount(5): count = 5, prevCount = 0
// After setCount(10): count = 10, prevCount = 5
```
