# Flatten Array

## Description

Implement a `flatten` function that flattens a nested array to a specified depth. Similar to `Array.prototype.flat()`.

## Examples

```
Input: flatten([1, [2, 3], [4, [5]]])
Output: [1, 2, 3, 4, [5]]  (default depth = 1)

Input: flatten([1, [2, [3, [4]]]], 2)
Output: [1, 2, 3, [4]]

Input: flatten([1, [2, [3, [4]]]], Infinity)
Output: [1, 2, 3, 4]
```

## Constraints

- Default depth is 1.
- When depth is 0, return a shallow copy of the array.
- Support `Infinity` as depth to fully flatten.
- Do not modify the original array.

## Complexity

- **Time:** O(n) where n is the total number of elements across all levels
- **Space:** O(n) for the result array plus O(d) recursion stack where d is the depth
