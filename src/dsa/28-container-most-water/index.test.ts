import { describe, it, expect } from 'vitest';
import { maxArea } from './index';

describe('maxArea', () => {
  it('should find max area for basic case', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('should handle two elements', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('should handle increasing heights', () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
  });

  it('should handle decreasing heights', () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  });

  it('should handle equal heights', () => {
    expect(maxArea([5, 5, 5, 5])).toBe(15);
  });

  it('should handle tall edges', () => {
    expect(maxArea([10, 1, 1, 1, 10])).toBe(40);
  });
});
