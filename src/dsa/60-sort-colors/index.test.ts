import { describe, it, expect } from 'vitest';
import { sortColors } from './index';

describe('Sort Colors', () => {
  it('should sort [2,0,2,1,1,0] in place', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it('should sort [2,0,1] in place', () => {
    const nums = [2, 0, 1];
    sortColors(nums);
    expect(nums).toEqual([0, 1, 2]);
  });

  it('should handle empty array', () => {
    const nums = [];
    sortColors(nums);
    expect(nums).toEqual([]);
  });

  it('should handle single element', () => {
    const nums = [1];
    sortColors(nums);
    expect(nums).toEqual([1]);
  });

  it('should handle already sorted', () => {
    const nums = [0, 0, 1, 1, 2, 2];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it('should handle all same values', () => {
    const nums = [1, 1, 1];
    sortColors(nums);
    expect(nums).toEqual([1, 1, 1]);
  });

  it('should handle reverse sorted', () => {
    const nums = [2, 2, 1, 1, 0, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it('should handle only 0s and 2s', () => {
    const nums = [2, 0, 2, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 2, 2]);
  });
});
