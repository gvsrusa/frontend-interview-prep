# Lowest Common Ancestor of a Binary Tree

## Description

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The LCA is defined as the lowest node in the tree that has both `p` and `q` as descendants (where a node can be a descendant of itself).

## Examples

```
Tree:       3
          /   \
         5     1
        / \   / \
       6   2 0   8
          / \
         7   4

Input: p = 5, q = 1
Output: 3

Input: p = 5, q = 4
Output: 5 (a node can be a descendant of itself)
```

## Constraints

- The number of nodes is in the range `[2, 10^5]`.
- `-10^9 <= Node.val <= 10^9`
- All node values are unique.
- `p` and `q` are different nodes and both exist in the tree.

## Complexity

- **Time:** O(n) where n is the number of nodes
- **Space:** O(h) where h is the height of the tree (recursion stack)
