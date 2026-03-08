class DOMNode {
  tagName;
  children;
  attributes;
  constructor(tagName, attributes = {}, children = []) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.children = children;
  }
}
function bfsTraversal(root) {
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    for (const child of node.children) {
      queue.push(child);
    }
  }
  return result;
}
function dfsTraversal(root) {
  const result = [];
  function traverse(node) {
    result.push(node);
    for (const child of node.children) {
      traverse(child);
    }
  }
  traverse(root);
  return result;
}
export {
  DOMNode,
  bfsTraversal,
  dfsTraversal
};
