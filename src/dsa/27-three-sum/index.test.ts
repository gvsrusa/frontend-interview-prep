import { describe, it, expect } from 'vitest';
import { threeSum } from './index';

function sortTriplets(triplets: number[][]): number[][] {
  return triplets.map((t) => [...t].sort((a, b) => a - b)).sort((a, b) => {
    for (let i = 0; i < 3; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });
}

describe('threeSum', () => {
  it('should find all unique triplets', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(sortTriplets(result)).toEqual(sortTriplets([[-1, -1, 2], [-1, 0, 1]]));
  });

  it('should return empty for no valid triplets', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  it('should handle all zeros', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('should handle empty array', () => {
    expect(threeSum([])).toEqual([]);
  });

  it('should handle array with less than 3 elements', () => {
    expect(threeSum([1, 2])).toEqual([]);
  });

  it('should avoid duplicate triplets', () => {
    const result = threeSum([-2, 0, 0, 2, 2]);
    expect(result).toEqual([[-2, 0, 2]]);
  });
});
