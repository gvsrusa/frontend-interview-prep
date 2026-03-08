# DOM Tree Traversal

## Description

Implement BFS (breadth-first search) and DFS (depth-first search) traversal over a mock DOM tree. Given a `DOMNode` class that models a DOM element with `tagName`, `children`, and `attributes`, implement:

- `bfsTraversal(root)` — returns all nodes in level-order (breadth-first).
- `dfsTraversal(root)` — returns all nodes in pre-order depth-first traversal.

This is a **frontend-specific** interview question testing tree traversal skills in a DOM context.

## Examples

```
DOM Structure:
  div#root
  ├── header
  │   ├── h1.title
  │   └── nav
  │       ├── a[href="/"]
  │       └── a[href="/about"]
  ├── main
  │   └── p.content
  └── footer

BFS: [div, header, main, footer, h1, nav, p, a, a]
DFS: [div, header, h1, nav, a, a, main, p, footer]
```

## Constraints

- Each `DOMNode` has `tagName` (string), `children` (DOMNode[]), and `attributes` (Record<string, string>).
- The tree is guaranteed to have at least one node.
- Children are ordered — traversal should respect this ordering.

## Complexity

- **Time:** O(n) for both BFS and DFS where n is the number of nodes
- **Space:** O(n) for the queue (BFS) or recursion stack (DFS)
