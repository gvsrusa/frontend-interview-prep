# Maximum Depth of Binary Tree

## Description

Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Examples

```
Input:     3
         /   \
        9    20
            /  \
           15   7
Output: 3

Input: [1, null, 2]
Output: 2

Input: []
Output: 0
```

## Constraints

- The number of nodes is in the range `[0, 10^4]`.
- `-100 <= Node.val <= 100`

## Complexity

- **Time:** O(n) where n is the number of nodes
- **Space:** O(h) where h is the height of the tree (recursion stack)
