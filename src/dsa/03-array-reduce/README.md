# Array Reduce

## Description

Implement a custom version of `Array.prototype.reduce` as a standalone function `myReduce`. The function executes a reducer callback on each element of the array, passing the return value from the previous call, ultimately producing a single output value.

## Examples

```
Input: myReduce([1, 2, 3, 4], (acc, val) => acc + val, 0)
Output: 10

Input: myReduce([1, 2, 3, 4], (acc, val) => acc + val)
Output: 10 (uses first element as initial accumulator)

Input: myReduce([], (acc, val) => acc + val)
Output: TypeError thrown
```

## Constraints

- The callback receives `(accumulator, currentValue, currentIndex, array)`.
- If `initialValue` is provided, use it as the initial accumulator and start from index 0.
- If `initialValue` is not provided, use the first element as the accumulator and start from index 1.
- Throw a `TypeError` if the array is empty and no `initialValue` is given.

## Complexity

- **Time:** O(n) where n is the length of the array
- **Space:** O(1) additional space (depends on the callback)
