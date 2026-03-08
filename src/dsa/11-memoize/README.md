# Memoize

## Description

Implement a generic `memoize` function that caches the results of function calls based on the arguments provided. If the function is called again with the same arguments, return the cached result instead of recomputing.

## Examples

```
const expensive = (n) => { /* heavy computation */ return n * n; };
const memoized = memoize(expensive);

memoized(5)  // computes and caches
memoized(5)  // returns cached result
memoized(10) // computes and caches
```

## Constraints

- Use `JSON.stringify(args)` as the default cache key serialization.
- Support an optional `keyResolver` function for custom cache key generation.
- The cache should grow unbounded (no eviction policy required).
- Handle functions with any number of arguments.

## Complexity

- **Time:** O(1) for cache hits, O(key_cost + fn_cost) for cache misses
- **Space:** O(n) where n is the number of unique argument combinations
