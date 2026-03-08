# Deep Clone

## Description

Implement a `deepClone` function that recursively creates a deep copy of a value. The function should handle plain objects, arrays, Date, Map, Set, RegExp, and circular references.

## Examples

```
Input: deepClone({ a: 1, b: { c: [2, 3] } })
Output: { a: 1, b: { c: [2, 3] } }  // new object, not the same reference

Input: deepClone(new Date('2024-01-01'))
Output: Date('2024-01-01')  // new Date instance

Input: deepClone(new Map([['key', { nested: true }]]))
Output: Map { 'key' => { nested: true } }  // new Map with cloned entries
```

## Constraints

- Handle primitives (return as-is).
- Handle plain objects and arrays recursively.
- Handle `Date`, `RegExp`, `Map`, and `Set` specifically.
- Handle circular references without infinite recursion.
- Do not use `JSON.parse(JSON.stringify(...))` or `structuredClone`.

## Complexity

- **Time:** O(n) where n is the total number of properties/elements
- **Space:** O(n) for the cloned structure plus recursion stack
