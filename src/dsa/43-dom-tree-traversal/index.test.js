import { describe, it, expect } from "vitest";
import { DOMNode, bfsTraversal, dfsTraversal } from "./index";
function buildDOMTree() {
  return new DOMNode("div", { id: "root" }, [
    new DOMNode("header", {}, [
      new DOMNode("h1", { class: "title" }),
      new DOMNode("nav", {}, [
        new DOMNode("a", { href: "/" }),
        new DOMNode("a", { href: "/about" })
      ])
    ]),
    new DOMNode("main", {}, [
      new DOMNode("p", { class: "content" })
    ]),
    new DOMNode("footer")
  ]);
}
function tagNames(nodes) {
  return nodes.map((n) => n.tagName);
}
describe("DOM Tree Traversal", () => {
  it("BFS should traverse level by level", () => {
    const root = buildDOMTree();
    const result = tagNames(bfsTraversal(root));
    expect(result).toEqual(["div", "header", "main", "footer", "h1", "nav", "p", "a", "a"]);
  });
  it("DFS should traverse depth-first (pre-order)", () => {
    const root = buildDOMTree();
    const result = tagNames(dfsTraversal(root));
    expect(result).toEqual(["div", "header", "h1", "nav", "a", "a", "main", "p", "footer"]);
  });
  it("should handle a single node", () => {
    const root = new DOMNode("span");
    expect(tagNames(bfsTraversal(root))).toEqual(["span"]);
    expect(tagNames(dfsTraversal(root))).toEqual(["span"]);
  });
  it("should include all nodes in the result", () => {
    const root = buildDOMTree();
    expect(bfsTraversal(root).length).toBe(9);
    expect(dfsTraversal(root).length).toBe(9);
  });
  it("should preserve node references with attributes", () => {
    const root = buildDOMTree();
    const bfsNodes = bfsTraversal(root);
    expect(bfsNodes[0].attributes).toEqual({ id: "root" });
    const dfsNodes = dfsTraversal(root);
    expect(dfsNodes[0].attributes).toEqual({ id: "root" });
  });
  it("should handle a flat list of children", () => {
    const root = new DOMNode("ul", {}, [
      new DOMNode("li", { class: "1" }),
      new DOMNode("li", { class: "2" }),
      new DOMNode("li", { class: "3" })
    ]);
    expect(tagNames(bfsTraversal(root))).toEqual(["ul", "li", "li", "li"]);
    expect(tagNames(dfsTraversal(root))).toEqual(["ul", "li", "li", "li"]);
  });
  it("should handle deeply nested structure", () => {
    const root = new DOMNode("div", {}, [
      new DOMNode("div", {}, [
        new DOMNode("div", {}, [
          new DOMNode("span")
        ])
      ])
    ]);
    expect(tagNames(bfsTraversal(root))).toEqual(["div", "div", "div", "span"]);
    expect(tagNames(dfsTraversal(root))).toEqual(["div", "div", "div", "span"]);
  });
});
export {
  buildDOMTree
};
