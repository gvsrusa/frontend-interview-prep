import { describe, it, expect } from 'vitest';
import { TreeNode, invertTree } from './index';

export function buildTree(values) {
  if (values.length === 0 || values[0] === null) return null;
  const root = new TreeNode(values[0]);
  const queue = [root];
  let i = 1;
  while (i < values.length) {
    const node = queue.shift();
    if (i < values.length && values[i] !== null) {
      node.left = new TreeNode(values[i]);
      queue.push(node.left);
    }
    i++;
    if (i < values.length && values[i] !== null) {
      node.right = new TreeNode(values[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

export function treeToArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) result.pop();
  return result;
}

describe('Invert Binary Tree', () => {
  it('should invert a complete tree', () => {
    const root = buildTree([4, 2, 7, 1, 3, 6, 9]);
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([4, 7, 2, 9, 6, 3, 1]);
  });

  it('should invert a small tree', () => {
    const root = buildTree([2, 1, 3]);
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([2, 3, 1]);
  });

  it('should return null for null input', () => {
    expect(invertTree(null)).toBeNull();
  });

  it('should handle single node', () => {
    const root = new TreeNode(1);
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([1]);
  });

  it('should invert a left-only tree', () => {
    const root = buildTree([1, 2, null, 3]);
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([1, null, 2, null, 3]);
  });

  it('should invert a right-only tree', () => {
    const root = buildTree([1, null, 2, null, 3]);
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([1, 2, null, 3]);
  });
});
