# Min Stack

## Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `push(val)` — pushes the element onto the stack.
- `pop()` — removes the element on the top of the stack.
- `top()` — gets the top element of the stack.
- `getMin()` — retrieves the minimum element in the stack.

All operations must run in **O(1)** time.

## Examples

```
const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
stack.getMin(); // => -3
stack.pop();
stack.top();    // => 0
stack.getMin(); // => -2
```

## Constraints

- Methods `pop`, `top`, and `getMin` will always be called on non-empty stacks.
- Values are in the range `[-2^31, 2^31 - 1]`.
- At most `3 * 10^4` calls will be made to push, pop, top, and getMin.

## Complexity

- **Time:** O(1) for all operations
- **Space:** O(n) where n is the number of elements
