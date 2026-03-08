export class DOMNode {
  tagName: string;
  children: DOMNode[];
  attributes: Record<string, string>;

  constructor(
    tagName: string,
    attributes: Record<string, string> = {},
    children: DOMNode[] = []
  ) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.children = children;
  }
}

export function bfsTraversal(root: DOMNode): DOMNode[] {
  const result: DOMNode[] = [];
  const queue: DOMNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node);
    for (const child of node.children) {
      queue.push(child);
    }
  }

  return result;
}

export function dfsTraversal(root: DOMNode): DOMNode[] {
  const result: DOMNode[] = [];

  function traverse(node: DOMNode): void {
    result.push(node);
    for (const child of node.children) {
      traverse(child);
    }
  }

  traverse(root);
  return result;
}
