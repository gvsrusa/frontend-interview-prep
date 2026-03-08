import { describe, it, expect } from 'vitest';
import { TreeNode, lowestCommonAncestor } from './index';

export function buildTreeWithRefs(values) {
  if (values.length === 0 || values[0] === null) return { root: null, nodes: new Map() };
  const nodes = new Map();
  const root = new TreeNode(values[0]);
  nodes.set(values[0], root);
  const queue = [root];
  let i = 1;
  while (i < values.length) {
    const node = queue.shift();
    if (i < values.length && values[i] !== null) {
      node.left = new TreeNode(values[i]);
      nodes.set(values[i], node.left);
      queue.push(node.left);
    }
    i++;
    if (i < values.length && values[i] !== null) {
      node.right = new TreeNode(values[i]);
      nodes.set(values[i], node.right);
      queue.push(node.right);
    }
    i++;
  }
  return { root, nodes };
}

describe('Lowest Common Ancestor', () => {
  it('should find LCA when nodes are in different subtrees', () => {
    const { root, nodes } = buildTreeWithRefs([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const result = lowestCommonAncestor(root, nodes.get(5), nodes.get(1));
    expect(result.val).toBe(3);
  });

  it('should find LCA when one node is ancestor of the other', () => {
    const { root, nodes } = buildTreeWithRefs([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const result = lowestCommonAncestor(root, nodes.get(5), nodes.get(4));
    expect(result.val).toBe(5);
  });

  it('should return root when p and q are root', () => {
    const root = new TreeNode(1);
    expect(lowestCommonAncestor(root, root, root).val).toBe(1);
  });

  it('should handle a two-node tree', () => {
    const root = new TreeNode(1, new TreeNode(2));
    const result = lowestCommonAncestor(root, root, root.left);
    expect(result.val).toBe(1);
  });

  it('should find LCA of adjacent nodes', () => {
    const { root, nodes } = buildTreeWithRefs([1, 2, 3, 4, 5]);
    const result = lowestCommonAncestor(root, nodes.get(4), nodes.get(5));
    expect(result.val).toBe(2);
  });

  it('should find LCA of deeply nested nodes', () => {
    const { root, nodes } = buildTreeWithRefs([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const result = lowestCommonAncestor(root, nodes.get(7), nodes.get(4));
    expect(result.val).toBe(2);
  });
});
