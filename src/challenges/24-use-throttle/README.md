# useThrottle Hook

## Description

Create a custom `useThrottle` hook that returns a throttled version of a callback. The throttled function fires at most once per specified interval, with a trailing call if invoked during the cooldown.

## Requirements

- Accept a `callback` function and a `delay` in milliseconds
- Return a throttled function that calls the callback at most once per `delay`
- The first call should execute immediately
- Schedule a trailing call if the function is invoked during the cooldown
- Clean up any pending timers on unmount
- Keep the returned function reference stable

## Examples

```jsx
const throttledScroll = useThrottle(handleScroll, 200)

window.addEventListener('scroll', throttledScroll)
// handleScroll fires at most every 200ms, no matter how often scroll fires
```
