import { describe, it, expect } from 'vitest';
import { mergeSort } from './index';

describe('Merge Sort', () => {
  it('should sort a basic array', () => {
    expect(mergeSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return empty array for empty input', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('should handle single element', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  it('should handle already sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle reverse sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle duplicates', () => {
    expect(mergeSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  it('should handle negative numbers', () => {
    expect(mergeSort([-3, 0, -1, 5, 2])).toEqual([-3, -1, 0, 2, 5]);
  });
});
