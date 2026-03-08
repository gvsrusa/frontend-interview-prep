import { describe, it, expect } from 'vitest';
import { ListNode, reverseList } from './index';

export function buildList(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

export function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('Reverse Linked List', () => {
  it('should reverse a list of multiple elements', () => {
    const head = buildList([1, 2, 3, 4, 5]);
    expect(listToArray(reverseList(head))).toEqual([5, 4, 3, 2, 1]);
  });

  it('should reverse a two-element list', () => {
    const head = buildList([1, 2]);
    expect(listToArray(reverseList(head))).toEqual([2, 1]);
  });

  it('should handle a single-element list', () => {
    const head = buildList([1]);
    expect(listToArray(reverseList(head))).toEqual([1]);
  });

  it('should handle an empty list', () => {
    expect(reverseList(null)).toBeNull();
  });

  it('should reverse a list with negative numbers', () => {
    const head = buildList([-1, -2, -3]);
    expect(listToArray(reverseList(head))).toEqual([-3, -2, -1]);
  });

  it('should reverse a list with duplicate values', () => {
    const head = buildList([1, 1, 2, 2]);
    expect(listToArray(reverseList(head))).toEqual([2, 2, 1, 1]);
  });
});
