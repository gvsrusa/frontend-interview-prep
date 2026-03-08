import { describe, it, expect } from 'vitest';
import { maxSubArray } from './index';

describe('maxSubArray', () => {
  it('should find the maximum subarray sum', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('should handle single element', () => {
    expect(maxSubArray([1])).toBe(1);
    expect(maxSubArray([-1])).toBe(-1);
  });

  it('should handle all positive numbers', () => {
    expect(maxSubArray([1, 2, 3, 4])).toBe(10);
  });

  it('should handle all negative numbers', () => {
    expect(maxSubArray([-3, -2, -1, -4])).toBe(-1);
  });

  it('should handle mixed positive and negative', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });

  it('should handle array with zeros', () => {
    expect(maxSubArray([0, -1, 0, -2, 0])).toBe(0);
  });
});
