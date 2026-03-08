import { describe, it, expect } from "vitest";
import { ListNode, hasCycle } from "./index";
function buildList(values) {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}
function buildCyclicList(values, cyclePos) {
  if (values.length === 0) return null;
  const nodes = values.map((v) => new ListNode(v));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  if (cyclePos >= 0 && cyclePos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[cyclePos];
  }
  return nodes[0];
}
describe("Linked List Cycle", () => {
  it("should detect a cycle in the middle", () => {
    const head = buildCyclicList([3, 2, 0, -4], 1);
    expect(hasCycle(head)).toBe(true);
  });
  it("should detect a cycle at the head", () => {
    const head = buildCyclicList([1, 2], 0);
    expect(hasCycle(head)).toBe(true);
  });
  it("should return false for a single node without cycle", () => {
    const head = buildList([1]);
    expect(hasCycle(head)).toBe(false);
  });
  it("should return false for a list without cycle", () => {
    const head = buildList([1, 2, 3, 4, 5]);
    expect(hasCycle(head)).toBe(false);
  });
  it("should return false for an empty list", () => {
    expect(hasCycle(null)).toBe(false);
  });
  it("should detect a self-loop on a single node", () => {
    const node = new ListNode(1);
    node.next = node;
    expect(hasCycle(node)).toBe(true);
  });
  it("should detect a cycle at the tail pointing back", () => {
    const head = buildCyclicList([1, 2, 3, 4], 2);
    expect(hasCycle(head)).toBe(true);
  });
});
export {
  buildCyclicList,
  buildList
};
