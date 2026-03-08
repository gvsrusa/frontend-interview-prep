import { describe, it, expect } from 'vitest';
import { TreeNode, preorderTraversal, inorderTraversal, postorderTraversal } from './index';

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

describe('DFS Tree Traversal', () => {
  const root = buildTree([1, 2, 3, 4, 5, 6, 7]);

  it('should return pre-order traversal (root, left, right)', () => {
    expect(preorderTraversal(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it('should return in-order traversal (left, root, right)', () => {
    expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });

  it('should return post-order traversal (left, right, root)', () => {
    expect(postorderTraversal(root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });

  it('should return empty array for null tree', () => {
    expect(preorderTraversal(null)).toEqual([]);
    expect(inorderTraversal(null)).toEqual([]);
    expect(postorderTraversal(null)).toEqual([]);
  });

  it('should handle single node', () => {
    const single = new TreeNode(42);
    expect(preorderTraversal(single)).toEqual([42]);
    expect(inorderTraversal(single)).toEqual([42]);
    expect(postorderTraversal(single)).toEqual([42]);
  });

  it('should handle left-only tree', () => {
    const leftOnly = buildTree([1, 2, null, 3]);
    expect(preorderTraversal(leftOnly)).toEqual([1, 2, 3]);
    expect(inorderTraversal(leftOnly)).toEqual([3, 2, 1]);
    expect(postorderTraversal(leftOnly)).toEqual([3, 2, 1]);
  });

  it('should handle right-only tree', () => {
    const rightOnly = buildTree([1, null, 2, null, 3]);
    expect(preorderTraversal(rightOnly)).toEqual([1, 2, 3]);
    expect(inorderTraversal(rightOnly)).toEqual([1, 2, 3]);
    expect(postorderTraversal(rightOnly)).toEqual([3, 2, 1]);
  });
});
