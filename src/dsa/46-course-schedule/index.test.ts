import { describe, it, expect } from 'vitest';
import { canFinish } from './index';

describe('Course Schedule', () => {
  it('should return true when no prerequisites exist', () => {
    expect(canFinish(3, [])).toBe(true);
  });

  it('should return true for a valid linear chain', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  it('should return false when a cycle exists', () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  it('should handle a larger acyclic graph', () => {
    expect(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toBe(true);
  });

  it('should detect cycle in a larger graph', () => {
    expect(canFinish(3, [[0, 1], [1, 2], [2, 0]])).toBe(false);
  });

  it('should return true for a single course', () => {
    expect(canFinish(1, [])).toBe(true);
  });

  it('should handle disconnected components', () => {
    expect(canFinish(4, [[1, 0], [3, 2]])).toBe(true);
  });
});
