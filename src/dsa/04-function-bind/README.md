# Function Bind

## Description

Implement a custom version of `Function.prototype.bind` as a standalone function `myBind`. The function should return a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

## Examples

```
const obj = { name: 'Alice' };
function greet(greeting) { return `${greeting}, ${this.name}`; }

const bound = myBind(greet, obj, 'Hello');
bound()  // => 'Hello, Alice'

function add(a, b) { return a + b; }
const add5 = myBind(add, null, 5);
add5(3)  // => 8
```

## Constraints

- The bound function must use the provided `thisArg` as its `this` context.
- Support partial application: arguments passed to `myBind` should be prepended to the arguments of the returned function.
- The bound function should ignore `this` overrides via `.call()` or `.apply()`.

## Complexity

- **Time:** O(1) for binding, O(1) for each invocation (beyond the original function's cost)
- **Space:** O(n) where n is the number of partially applied arguments
