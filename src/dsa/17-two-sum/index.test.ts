import { describe, it, expect } from 'vitest';
import { twoSum } from './index';

describe('twoSum', () => {
  it('should find indices for basic case', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should work when target pair is not at the beginning', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('should handle duplicate values', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should handle negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it('should handle zero in the array', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  it('should throw when no solution exists', () => {
    expect(() => twoSum([1, 2, 3], 10)).toThrow();
  });
});
