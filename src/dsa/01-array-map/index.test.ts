import { describe, it, expect } from 'vitest';
import { myMap } from './index';

describe('myMap', () => {
  it('should double each element', () => {
    expect(myMap([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
  });

  it('should pass index as second argument', () => {
    expect(myMap(['a', 'b', 'c'], (_, i) => i)).toEqual([0, 1, 2]);
  });

  it('should pass the original array as third argument', () => {
    const arr = [10, 20];
    myMap(arr, (_val, _i, original) => {
      expect(original).toBe(arr);
      return 0;
    });
  });

  it('should return an empty array for empty input', () => {
    expect(myMap([], (x) => x)).toEqual([]);
  });

  it('should handle string transformations', () => {
    expect(myMap(['hello', 'world'], (s) => s.toUpperCase())).toEqual([
      'HELLO',
      'WORLD',
    ]);
  });

  it('should support thisArg', () => {
    const context = { multiplier: 3 };
    const result = myMap(
      [1, 2, 3],
      function (this: { multiplier: number }, x: number) {
        return x * this.multiplier;
      },
      context
    );
    expect(result).toEqual([3, 6, 9]);
  });
});
