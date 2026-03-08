import { describe, it, expect } from "vitest";
import { TreeNode, isValidBST } from "./index";
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
describe("Validate Binary Search Tree", () => {
  it("should return true for a valid BST", () => {
    const root = buildTree([2, 1, 3]);
    expect(isValidBST(root)).toBe(true);
  });
  it("should return false for an invalid BST", () => {
    const root = buildTree([5, 1, 4, null, null, 3, 6]);
    expect(isValidBST(root)).toBe(false);
  });
  it("should return true for a single node", () => {
    expect(isValidBST(new TreeNode(1))).toBe(true);
  });
  it("should return true for null tree", () => {
    expect(isValidBST(null)).toBe(true);
  });
  it("should return false when left child equals parent", () => {
    const root = new TreeNode(1, new TreeNode(1));
    expect(isValidBST(root)).toBe(false);
  });
  it("should catch invalid BST where subtree violates ancestor constraint", () => {
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(6)),
      new TreeNode(7)
    );
    expect(isValidBST(root)).toBe(false);
  });
  it("should validate a larger valid BST", () => {
    const root = buildTree([10, 5, 15, 3, 7, null, 20]);
    expect(isValidBST(root)).toBe(true);
  });
});
export {
  buildTree
};
