# Merge Two Sorted Lists

## Description

Given the heads of two sorted linked lists, merge them into one sorted list. The merged list should be made by splicing together the nodes of the two input lists. Return the head of the merged linked list.

## Examples

```
Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
Output: [1, 1, 2, 3, 4, 4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]
```

## Constraints

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both lists are sorted in non-decreasing order.

## Complexity

- **Time:** O(n + m) where n and m are the lengths of the two lists
- **Space:** O(1) — only pointer manipulation, no extra nodes created
