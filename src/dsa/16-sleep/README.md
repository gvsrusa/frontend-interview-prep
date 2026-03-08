# Sleep

## Description

Implement a `sleep` function that returns a promise which resolves after a specified number of milliseconds. Optionally, the promise can resolve with a given value.

## Examples

```
await sleep(1000);  // waits 1 second, resolves with undefined

const result = await sleep(500, 'hello');  // waits 500ms, resolves with 'hello'
```

## Constraints

- Return a `Promise` that resolves after `ms` milliseconds.
- If a `value` parameter is provided, resolve with that value.
- If no `value` is provided, resolve with `undefined`.
- Handle zero delay (resolve on next tick).

## Complexity

- **Time:** O(1) setup
- **Space:** O(1)
