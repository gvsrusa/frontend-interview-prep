# DFS Tree Traversal

## Description

Given the root of a binary tree, implement three depth-first traversal methods:

- **Pre-order:** Visit the node, then traverse left subtree, then right subtree.
- **In-order:** Traverse left subtree, visit the node, then traverse right subtree.
- **Post-order:** Traverse left subtree, then right subtree, then visit the node.

Each function returns an array of node values in the traversal order.

## Examples

```
Tree:       1
          /   \
         2     3
        / \   / \
       4   5 6   7

preorderTraversal  => [1, 2, 4, 5, 3, 6, 7]
inorderTraversal   => [4, 2, 5, 1, 6, 3, 7]
postorderTraversal => [4, 5, 2, 6, 7, 3, 1]
```

## Constraints

- The number of nodes is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

## Complexity

- **Time:** O(n) for each traversal where n is the number of nodes
- **Space:** O(h) for the recursive call stack where h is the height of the tree
