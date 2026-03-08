import { describe, it, expect } from "vitest";
import { TreeNode, levelOrder } from "./index";
function buildTree(values) {
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
describe("BFS Tree Traversal", () => {
  it("should return level-order traversal of a complete tree", () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });
  it("should return single node", () => {
    const root = buildTree([1]);
    expect(levelOrder(root)).toEqual([[1]]);
  });
  it("should return empty array for null tree", () => {
    expect(levelOrder(null)).toEqual([]);
  });
  it("should handle left-skewed tree", () => {
    const root = buildTree([1, 2, null, 3]);
    expect(levelOrder(root)).toEqual([[1], [2], [3]]);
  });
  it("should handle right-skewed tree", () => {
    const root = buildTree([1, null, 2, null, 3]);
    expect(levelOrder(root)).toEqual([[1], [2], [3]]);
  });
  it("should handle a balanced tree", () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });
});
export {
  buildTree
};
