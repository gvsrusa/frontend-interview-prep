import { describe, it, expect } from 'vitest';
import { maxProfit } from './index';

describe('maxProfit', () => {
  it('should return max profit for basic case', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('should return 0 when prices only decrease', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('should handle single price', () => {
    expect(maxProfit([5])).toBe(0);
  });

  it('should handle empty array', () => {
    expect(maxProfit([])).toBe(0);
  });

  it('should handle two prices with profit', () => {
    expect(maxProfit([1, 5])).toBe(4);
  });

  it('should handle two prices without profit', () => {
    expect(maxProfit([5, 1])).toBe(0);
  });

  it('should find profit when min is at the start', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });
});
