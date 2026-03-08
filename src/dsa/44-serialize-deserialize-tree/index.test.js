import { describe, it, expect } from 'vitest';
import { TreeNode, serialize, deserialize } from './index';

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

describe('Serialize and Deserialize Binary Tree', () => {
  it('should round-trip a complete tree', () => {
    const root = buildTree([1, 2, 3, null, null, 4, 5]);
    const data = serialize(root);
    const restored = deserialize(data);
    expect(treeToArray(restored)).toEqual([1, 2, 3, null, null, 4, 5]);
  });

  it('should handle null tree', () => {
    const data = serialize(null);
    expect(deserialize(data)).toBeNull();
  });

  it('should handle single node', () => {
    const root = new TreeNode(42);
    const data = serialize(root);
    const restored = deserialize(data);
    expect(restored.val).toBe(42);
    expect(restored.left).toBeNull();
    expect(restored.right).toBeNull();
  });

  it('should handle left-skewed tree', () => {
    const root = buildTree([1, 2, null, 3]);
    const data = serialize(root);
    const restored = deserialize(data);
    expect(treeToArray(restored)).toEqual([1, 2, null, 3]);
  });

  it('should handle negative values', () => {
    const root = buildTree([-1, -2, -3]);
    const data = serialize(root);
    const restored = deserialize(data);
    expect(treeToArray(restored)).toEqual([-1, -2, -3]);
  });

  it('should produce a string from serialize', () => {
    const root = buildTree([1, 2, 3]);
    const data = serialize(root);
    expect(typeof data).toBe('string');
  });

  it('should handle a larger tree', () => {
    const root = buildTree([5, 3, 8, 1, 4, 7, 9]);
    const data = serialize(root);
    const restored = deserialize(data);
    expect(treeToArray(restored)).toEqual([5, 3, 8, 1, 4, 7, 9]);
  });
});
