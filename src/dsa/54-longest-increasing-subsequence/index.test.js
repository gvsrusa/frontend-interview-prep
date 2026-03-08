import { describe, it, expect } from 'vitest';
import { lengthOfLIS } from './index';

describe('Longest Increasing Subsequence', () => {
  it('should return 4 for [10,9,2,5,3,7,101,18]', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  it('should return 4 for [0,1,0,3,2,3]', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
  });

  it('should return 1 for [7,7,7,7,7]', () => {
    expect(lengthOfLIS([7, 7, 7, 7, 7])).toBe(1);
  });

  it('should return 0 for empty array', () => {
    expect(lengthOfLIS([])).toBe(0);
  });

  it('should return 1 for single element', () => {
    expect(lengthOfLIS([42])).toBe(1);
  });

  it('should return n for strictly increasing array', () => {
    expect(lengthOfLIS([1, 2, 3, 4, 5])).toBe(5);
  });

  it('should return 1 for strictly decreasing array', () => {
    expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1);
  });
});
