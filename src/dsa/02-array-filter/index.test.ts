import { describe, it, expect } from 'vitest';
import { myFilter } from './index';

describe('myFilter', () => {
  it('should filter even numbers', () => {
    expect(myFilter([1, 2, 3, 4, 5], (x) => x % 2 === 0)).toEqual([2, 4]);
  });

  it('should return empty array when no elements match', () => {
    expect(myFilter([1, 3, 5], (x) => x % 2 === 0)).toEqual([]);
  });

  it('should return empty array for empty input', () => {
    expect(myFilter([], (x) => x)).toEqual([]);
  });

  it('should pass index and array to callback', () => {
    const result = myFilter([10, 20, 30], (val, idx) => idx > 0);
    expect(result).toEqual([20, 30]);
  });

  it('should filter strings by length', () => {
    expect(myFilter(['hi', 'hello', 'hey', 'world'], (s) => s.length > 3)).toEqual([
      'hello',
      'world',
    ]);
  });

  it('should support thisArg', () => {
    const context = { threshold: 10 };
    const result = myFilter(
      [5, 15, 3, 20],
      function (x) {
        return x > this.threshold;
      },
      context
    );
    expect(result).toEqual([15, 20]);
  });
});
