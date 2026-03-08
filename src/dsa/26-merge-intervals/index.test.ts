import { describe, it, expect } from 'vitest';
import { merge } from './index';

describe('merge intervals', () => {
  it('should merge overlapping intervals', () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
      [1, 6], [8, 10], [15, 18],
    ]);
  });

  it('should merge fully overlapping intervals', () => {
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  });

  it('should handle single interval', () => {
    expect(merge([[1, 5]])).toEqual([[1, 5]]);
  });

  it('should handle no overlaps', () => {
    expect(merge([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  it('should handle all overlapping into one', () => {
    expect(merge([[1, 10], [2, 5], [3, 7]])).toEqual([[1, 10]]);
  });

  it('should handle unsorted input', () => {
    expect(merge([[3, 4], [1, 2], [2, 3]])).toEqual([[1, 4]]);
  });

  it('should handle empty input', () => {
    expect(merge([])).toEqual([]);
  });
});
