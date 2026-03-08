# Linked List Cycle

## Description

Given the head of a linked list, determine if the linked list has a cycle in it. A cycle exists if some node in the list can be reached again by continuously following the `next` pointer. Use Floyd's Tortoise and Hare algorithm to solve it in O(1) space.

## Examples

```
Input: [3, 2, 0, -4] with tail connecting to index 1
Output: true

Input: [1, 2] with tail connecting to index 0
Output: true

Input: [1] with no cycle
Output: false
```

## Constraints

- The number of nodes is in the range `[0, 10^4]`.
- `-10^5 <= Node.val <= 10^5`
- Solve it using O(1) extra memory (no hash set).

## Complexity

- **Time:** O(n) where n is the number of nodes
- **Space:** O(1) — only two pointers used
