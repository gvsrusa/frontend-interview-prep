import { describe, it, expect } from 'vitest';
import { TreeNode, maxDepth } from './index';

export function buildTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0 || values[0] === null) return null;
  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (i < values.length) {
    const node = queue.shift()!;
    if (i < values.length && values[i] !== null) {
      node.left = new TreeNode(values[i] as number);
      queue.push(node.left);
    }
    i++;
    if (i < values.length && values[i] !== null) {
      node.right = new TreeNode(values[i] as number);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

describe('Maximum Depth of Binary Tree', () => {
  it('should return 3 for a tree of depth 3', () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  it('should return 1 for a single node', () => {
    expect(maxDepth(new TreeNode(1))).toBe(1);
  });

  it('should return 0 for a null tree', () => {
    expect(maxDepth(null)).toBe(0);
  });

  it('should handle left-skewed tree', () => {
    const root = buildTree([1, 2, null, 3, null, 4]);
    expect(maxDepth(root)).toBe(4);
  });

  it('should handle right-skewed tree', () => {
    const root = buildTree([1, null, 2, null, 3]);
    expect(maxDepth(root)).toBe(3);
  });

  it('should handle a complete balanced tree', () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  it('should return 2 for a two-level tree', () => {
    const root = buildTree([1, 2]);
    expect(maxDepth(root)).toBe(2);
  });
});
