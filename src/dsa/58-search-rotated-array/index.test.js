import { describe, it, expect } from 'vitest';
import { search } from './index';

describe('Search in Rotated Sorted Array', () => {
  it('should find target in rotated array', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it('should return -1 when target is absent', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it('should return -1 for empty array', () => {
    expect(search([], 5)).toBe(-1);
  });

  it('should find target at the pivot', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
  });

  it('should handle non-rotated array', () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it('should handle single element found', () => {
    expect(search([1], 1)).toBe(0);
  });

  it('should handle single element not found', () => {
    expect(search([1], 0)).toBe(-1);
  });

  it('should find target in the right half', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
  });
});
