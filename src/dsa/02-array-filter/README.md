# Array Filter

## Description

Implement a custom version of `Array.prototype.filter` as a standalone function `myFilter`. The function should create a new array with all elements that pass the test implemented by the provided callback function.

## Examples

```
Input: myFilter([1, 2, 3, 4, 5], x => x % 2 === 0)
Output: [2, 4]

Input: myFilter(['hello', 'hi', 'world'], s => s.length > 2)
Output: ['hello', 'world']

Input: myFilter([], x => x)
Output: []
```

## Constraints

- The callback receives `(element, index, array)` as arguments.
- Support an optional `thisArg` parameter for the callback context.
- Do not modify the original array.
- Only include elements for which the callback returns a truthy value.

## Complexity

- **Time:** O(n) where n is the length of the array
- **Space:** O(n) worst case for the result array
