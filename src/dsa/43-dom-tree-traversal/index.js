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
  throw new Error("Not implemented");
}
function dfsTraversal(root) {
  throw new Error("Not implemented");
}
export {
  DOMNode,
  bfsTraversal,
  dfsTraversal
};
