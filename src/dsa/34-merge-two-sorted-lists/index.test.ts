import { describe, it, expect } from 'vitest';
import { ListNode, mergeTwoLists } from './index';

export function buildList(values) {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

export function listToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('Merge Two Sorted Lists', () => {
  it('should merge two non-empty sorted lists', () => {
    const l1 = buildList([1, 2, 4]);
    const l2 = buildList([1, 3, 4]);
    expect(listToArray(mergeTwoLists(l1, l2))).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('should handle both empty lists', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  it('should handle one empty list', () => {
    const l1 = buildList([1, 2, 3]);
    expect(listToArray(mergeTwoLists(l1, null))).toEqual([1, 2, 3]);
    const l2 = buildList([4, 5, 6]);
    expect(listToArray(mergeTwoLists(null, l2))).toEqual([4, 5, 6]);
  });

  it('should merge lists of different lengths', () => {
    const l1 = buildList([1]);
    const l2 = buildList([2, 3, 4, 5]);
    expect(listToArray(mergeTwoLists(l1, l2))).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle lists with negative values', () => {
    const l1 = buildList([-3, -1, 2]);
    const l2 = buildList([-2, 0, 4]);
    expect(listToArray(mergeTwoLists(l1, l2))).toEqual([-3, -2, -1, 0, 2, 4]);
  });

  it('should handle single-element lists', () => {
    const l1 = buildList([0]);
    const l2 = buildList([0]);
    expect(listToArray(mergeTwoLists(l1, l2))).toEqual([0, 0]);
  });
});
