# Promise.all

## Description

Implement `Promise.all` from scratch. The function takes an array of promises (or values) and returns a single promise that resolves to an array of results when all input promises resolve, or rejects as soon as any promise rejects.

## Examples

```
Input: promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
Output: Promise<[1, 2, 3]>

Input: promiseAll([Promise.resolve(1), Promise.reject('err')])
Output: Promise.reject('err')

Input: promiseAll([])
Output: Promise<[]>
```

## Constraints

- Maintain the order of results matching the input order.
- Handle non-promise values by wrapping them with `Promise.resolve()`.
- Reject immediately on the first rejection.
- Resolve with an empty array for empty input.

## Complexity

- **Time:** O(n) where n is the number of promises
- **Space:** O(n) for storing results
