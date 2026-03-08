# BFS Tree Traversal (Level-Order)

## Description

Given the root of a binary tree, return the level-order traversal of its nodes' values (i.e., from left to right, level by level). Each level should be a separate sub-array.

## Examples

```
Input:     3
         /   \
        9    20
            /  \
           15   7
Output: [[3], [9, 20], [15, 7]]

Input: [1]
Output: [[1]]

Input: []
Output: []
```

## Constraints

- The number of nodes is in the range `[0, 2000]`.
- `-1000 <= Node.val <= 1000`

## Complexity

- **Time:** O(n) where n is the number of nodes
- **Space:** O(n) for the queue and result arrays
