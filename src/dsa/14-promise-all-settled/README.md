# Promise.allSettled

## Description

Implement `Promise.allSettled` from scratch. The function takes an array of promises and returns a promise that resolves after all input promises have settled (either fulfilled or rejected). The result is an array of objects describing each promise's outcome.

## Examples

```
Input: promiseAllSettled([Promise.resolve(1), Promise.reject('err')])
Output: [
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 'err' }
]

Input: promiseAllSettled([])
Output: []
```

## Constraints

- The returned promise always resolves (never rejects).
- Each result object has `status: 'fulfilled'` with `value`, or `status: 'rejected'` with `reason`.
- Maintain the order of results matching the input order.
- Handle non-promise values by wrapping them.

## Complexity

- **Time:** O(n) where n is the number of promises
- **Space:** O(n) for storing results
