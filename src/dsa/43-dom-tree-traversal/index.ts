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
  throw new Error('Not implemented');
}

export function dfsTraversal(root: DOMNode): DOMNode[] {
  throw new Error('Not implemented');
}
