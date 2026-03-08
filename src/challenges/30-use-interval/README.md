# useInterval Hook

## Description

Create a declarative `useInterval` hook that wraps `setInterval` with proper cleanup, dynamic delay support, and the ability to pause by passing `null`.

## Requirements

- Accept a `callback` function and a `delay` in milliseconds (or `null` to pause)
- Call the callback at the specified interval
- Always use the latest version of the callback (no stale closures)
- Pause the interval when `delay` is `null`
- Reset the interval when the delay changes
- Clean up on unmount

## Examples

```jsx
const [count, setCount] = useState(0)
const [running, setRunning] = useState(true)

useInterval(() => setCount(c => c + 1), running ? 1000 : null)
// count increments every second when running
// Pass null to pause
```
