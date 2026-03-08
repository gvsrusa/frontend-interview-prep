import { describe, it, expect } from 'vitest';
import { quickSort } from './index';

describe('Quick Sort', () => {
  it('should sort a basic array', () => {
    expect(quickSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
  });

  it('should return empty array for empty input', () => {
    expect(quickSort([])).toEqual([]);
  });

  it('should handle single element', () => {
    expect(quickSort([42])).toEqual([42]);
  });

  it('should handle already sorted array', () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle reverse sorted array', () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle duplicates', () => {
    expect(quickSort([3, 6, 8, 3, 6])).toEqual([3, 3, 6, 6, 8]);
  });

  it('should handle negative numbers', () => {
    expect(quickSort([-2, 5, 0, -8, 3])).toEqual([-8, -2, 0, 3, 5]);
  });

  it('should not mutate the original array', () => {
    const original = [5, 3, 1];
    quickSort(original);
    expect(original).toEqual([5, 3, 1]);
  });
});
