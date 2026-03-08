# Curry

## Description

Implement a `curry` function that converts a multi-argument function into a sequence of functions each taking one or more arguments. The curried function should accumulate arguments until enough are provided, then execute the original function.

## Examples

```
const add = (a, b, c) => a + b + c;
const curried = curry(add);

curried(1)(2)(3)     // => 6
curried(1, 2)(3)     // => 6
curried(1)(2, 3)     // => 6
curried(1, 2, 3)     // => 6
```

## Constraints

- Use `fn.length` to determine the expected number of arguments.
- Support passing multiple arguments at any step.
- When enough arguments are collected, call the original function.
- Zero-argument functions should be called immediately.

## Complexity

- **Time:** O(n) where n is the number of arguments (for accumulation)
- **Space:** O(n) for stored partial arguments
