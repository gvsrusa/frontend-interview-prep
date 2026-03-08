import { describe, it, expect } from 'vitest';
import { uniquePaths } from './index';

describe('Unique Paths', () => {
  it('should return 1 for a 1x1 grid', () => {
    expect(uniquePaths(1, 1)).toBe(1);
  });

  it('should return 1 for a single row', () => {
    expect(uniquePaths(1, 5)).toBe(1);
  });

  it('should return 1 for a single column', () => {
    expect(uniquePaths(5, 1)).toBe(1);
  });

  it('should return 2 for a 2x2 grid', () => {
    expect(uniquePaths(2, 2)).toBe(2);
  });

  it('should return 28 for a 3x7 grid', () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });

  it('should return 6 for a 3x3 grid', () => {
    expect(uniquePaths(3, 3)).toBe(6);
  });

  it('should handle larger grids', () => {
    expect(uniquePaths(7, 3)).toBe(28);
  });
});
