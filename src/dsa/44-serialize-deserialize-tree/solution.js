export class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function serialize(root) {
  const parts = [];

  function dfs(node) {
    if (!node) {
      parts.push('null');
      return;
    }
    parts.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return parts.join(',');
}

export function deserialize(data) {
  const tokens = data.split(',');
  let index = 0;

  function dfs() {
    if (index >= tokens.length) return null;
    const token = tokens[index++];
    if (token === 'null') return null;
    const node = new TreeNode(Number(token));
    node.left = dfs();
    node.right = dfs();
    return node;
  }

  return dfs();
}
