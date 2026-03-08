# Implement Queue

## Description

Implement a `Queue` class that follows the First-In-First-Out (FIFO) principle. The queue should support `enqueue`, `dequeue`, `peek`, `isEmpty`, and `size` operations, all in O(1) time.

## Examples

```
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.peek();      // => 1
queue.dequeue();   // => 1
queue.dequeue();   // => 2
queue.size;        // => 1
queue.isEmpty();   // => false
```

## Constraints

- `enqueue(value)` — adds an element to the back of the queue.
- `dequeue()` — removes and returns the front element, or `undefined` if empty.
- `peek()` — returns the front element without removing it, or `undefined` if empty.
- `isEmpty()` — returns `true` if the queue has no elements.
- `size` — returns the number of elements in the queue.
- **Do not use `Array.shift()`** — it's O(n). Use an object with head/tail pointers instead.

## Complexity

- **Time:** O(1) for all operations
- **Space:** O(n) where n is the number of elements
