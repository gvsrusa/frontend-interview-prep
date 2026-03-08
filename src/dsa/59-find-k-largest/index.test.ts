import { describe, it, expect } from 'vitest';
import { findKLargest } from './index';

describe('Find K Largest Elements', () => {
  it('should find 2 largest in [3,2,1,5,6,4]', () => {
    expect(findKLargest([3, 2, 1, 5, 6, 4], 2)).toEqual([6, 5]);
  });

  it('should find 4 largest in [3,2,3,1,2,4,5,5,6]', () => {
    expect(findKLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual([6, 5, 5, 4]);
  });

  it('should return all elements when k equals array length', () => {
    expect(findKLargest([1, 2, 3], 3)).toEqual([3, 2, 1]);
  });

  it('should handle single element', () => {
    expect(findKLargest([7], 1)).toEqual([7]);
  });

  it('should return empty for k = 0', () => {
    expect(findKLargest([1, 2, 3], 0)).toEqual([]);
  });

  it('should handle negative numbers', () => {
    expect(findKLargest([-1, -2, -3, -4], 2)).toEqual([-1, -2]);
  });

  it('should handle all identical elements', () => {
    expect(findKLargest([5, 5, 5, 5], 2)).toEqual([5, 5]);
  });
});
