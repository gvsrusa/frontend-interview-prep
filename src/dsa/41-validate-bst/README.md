# Validate Binary Search Tree

## Description

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as:
- The left subtree of a node contains only nodes with keys **strictly less than** the node's key.
- The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

## Examples

```
Input:   2        Output: true
        / \
       1   3

Input:   5        Output: false
        / \       (4 is in the right subtree of 5 but is less than 5)
       1   4
          / \
         3   6
```

## Constraints

- The number of nodes is in the range `[0, 10^4]`.
- `-2^31 <= Node.val <= 2^31 - 1`
- Checking only immediate children is not sufficient — the entire subtree must satisfy the BST property.

## Complexity

- **Time:** O(n) where n is the number of nodes
- **Space:** O(h) where h is the height of the tree (recursion stack)
