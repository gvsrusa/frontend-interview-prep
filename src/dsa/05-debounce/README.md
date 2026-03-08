# Debounce

## Description

Implement a `debounce` function that delays invoking the provided function until after `delay` milliseconds have elapsed since the last time it was invoked. The debounced function should also have `cancel` and `flush` methods.

## Examples

```
const log = debounce(console.log, 300);
log('a');  // timer starts
log('b');  // timer resets
// After 300ms: console.log('b') is called

log('c');
log.cancel();  // pending call is cancelled

log('d');
log.flush();   // console.log('d') is called immediately
```

## Constraints

- Only the last invocation in a burst of calls should execute after the delay.
- `cancel()` should clear any pending invocation.
- `flush()` should immediately execute any pending invocation and clear the timer.
- Preserve the arguments from the most recent call.

## Complexity

- **Time:** O(1) per call
- **Space:** O(1)
