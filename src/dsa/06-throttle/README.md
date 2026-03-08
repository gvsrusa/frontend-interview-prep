# Throttle

## Description

Implement a `throttle` function that ensures the provided function is called at most once per specified time interval. Support `leading` and `trailing` options to control when the function fires.

## Examples

```
const log = throttle(console.log, 300);
log('a');  // executes immediately (leading)
log('b');  // ignored (within interval)
log('c');  // scheduled as trailing call
// After 300ms: console.log('c') fires (trailing)
```

## Constraints

- `leading` (default `true`): If true, execute on the leading edge of the interval.
- `trailing` (default `true`): If true, execute on the trailing edge of the interval.
- Preserve the latest arguments for the trailing call.
- At least one of `leading` or `trailing` should be true.

## Complexity

- **Time:** O(1) per call
- **Space:** O(1)
