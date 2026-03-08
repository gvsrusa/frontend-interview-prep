import { describe, it, expect } from 'vitest';
import { flatten } from './index';

describe('flatten', () => {
  it('should flatten one level by default', () => {
    expect(flatten([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, [5]]);
  });

  it('should flatten to the specified depth', () => {
    expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
  });

  it('should flatten completely with Infinity depth', () => {
    expect(flatten([1, [2, [3, [4, [5]]]]], Infinity)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return same elements for already flat array', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return empty array for empty input', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should not flatten when depth is 0', () => {
    expect(flatten([1, [2, 3]], 0)).toEqual([1, [2, 3]]);
  });

  it('should handle mixed types', () => {
    expect(flatten([1, ['a', [true]], null])).toEqual([1, 'a', [true], null]);
  });
});
