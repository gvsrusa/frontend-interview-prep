# Promise.race

## Description

Implement `Promise.race` from scratch. The function takes an array of promises and returns a promise that settles with the result of the first promise to settle (either fulfilled or rejected).

## Examples

```
Input: promiseRace([
  new Promise(r => setTimeout(() => r('slow'), 200)),
  Promise.resolve('fast')
])
Output: Promise<'fast'>

Input: promiseRace([Promise.reject('err'), Promise.resolve('ok')])
Output: Promise.reject('err')
```

## Constraints

- The returned promise settles as soon as the first input promise settles.
- Handle both fulfillment and rejection of the first settler.
- Handle non-promise values (treated as already resolved).
- If the array is empty, the returned promise remains pending forever (matching native behavior).

## Complexity

- **Time:** O(n) to set up listeners
- **Space:** O(1) additional space
