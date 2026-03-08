# Implement Stack

## Description

Implement a `Stack` class that follows the Last-In-First-Out (LIFO) principle. The stack should support `push`, `pop`, `peek`, `isEmpty`, and `size` operations.

## Examples

```
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.peek();    // => 3
stack.pop();     // => 3
stack.pop();     // => 2
stack.size;      // => 1
stack.isEmpty(); // => false
```

## Constraints

- `push(value)` — adds an element to the top of the stack.
- `pop()` — removes and returns the top element, or `undefined` if empty.
- `peek()` — returns the top element without removing it, or `undefined` if empty.
- `isEmpty()` — returns `true` if the stack has no elements.
- `size` — returns the number of elements in the stack.

## Complexity

- **Time:** O(1) for all operations
- **Space:** O(n) where n is the number of elements
