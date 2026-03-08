# Array Map

## Description

Implement a custom version of `Array.prototype.map` as a standalone function `myMap`. The function should create a new array populated with the results of calling a provided callback function on every element in the input array.

## Examples

```
Input: myMap([1, 2, 3], x => x * 2)
Output: [2, 4, 6]

Input: myMap(['a', 'b'], (val, idx) => `${idx}:${val}`)
Output: ['0:a', '1:b']

Input: myMap([], x => x)
Output: []
```

## Constraints

- The callback receives `(element, index, array)` as arguments.
- Support an optional `thisArg` parameter for the callback context.
- Handle sparse arrays (holes should be preserved).
- Do not modify the original array.

## Complexity

- **Time:** O(n) where n is the length of the array
- **Space:** O(n) for the result array
