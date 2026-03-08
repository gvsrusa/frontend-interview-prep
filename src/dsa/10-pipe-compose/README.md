# Pipe & Compose

## Description

Implement `pipe` and `compose` functions for function composition.

- `pipe(...fns)` returns a function that applies `fns` left-to-right.
- `compose(...fns)` returns a function that applies `fns` right-to-left.

## Examples

```
const add1 = x => x + 1;
const double = x => x * 2;

pipe(add1, double)(5)     // => 12  (5+1=6, 6*2=12)
compose(add1, double)(5)  // => 11  (5*2=10, 10+1=11)
```

## Constraints

- Each function in the pipeline takes a single argument and returns a single value.
- If no functions are provided, return the identity function.
- Do not mutate the input functions array.

## Complexity

- **Time:** O(n) per invocation, where n is the number of functions
- **Space:** O(1) additional space
