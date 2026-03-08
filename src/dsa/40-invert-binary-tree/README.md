# Invert Binary Tree

## Description

Given the root of a binary tree, invert the tree (mirror it) and return its root. Inverting a binary tree means swapping the left and right children of every node.

## Examples

```
Input:      4                Output:     4
          /   \                        /   \
         2     7                      7     2
        / \   / \                    / \   / \
       1   3 6   9                  9   6 3   1

Input: [2, 1, 3]
Output: [2, 3, 1]

Input: []
Output: []
```

## Constraints

- The number of nodes is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

## Complexity

- **Time:** O(n) where n is the number of nodes
- **Space:** O(h) where h is the height of the tree (recursion stack)
