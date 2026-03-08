# Serialize and Deserialize Binary Tree

## Description

Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of converting a tree to a string, and deserialization is reconstructing the tree from the string.

Implement two functions:

- `serialize(root)` — Encodes a tree to a single string.
- `deserialize(data)` — Decodes the string back to a tree.

The encoding/decoding scheme can be any format as long as `deserialize(serialize(tree))` produces the original tree.

## Examples

```
Input tree:     1
              /   \
             2     3
                  / \
                 4   5

serialize => "1,2,null,null,3,4,null,null,5,null,null"
deserialize("1,2,null,null,3,4,null,null,5,null,null") => original tree
```

## Constraints

- The number of nodes is in the range `[0, 10^4]`.
- `-1000 <= Node.val <= 1000`
- The serialized string should be decodable back to the exact same tree structure.

## Complexity

- **Time:** O(n) for both serialize and deserialize
- **Space:** O(n) for the serialized string and recursion stack
