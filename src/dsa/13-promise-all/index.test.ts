import { describe, it, expect } from 'vitest';
import { promiseAll } from './index';

describe('promiseAll', () => {
  it('should resolve with all values', async () => {
    const result = await promiseAll([
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should maintain order regardless of resolution time', async () => {
    const result = await promiseAll([
      new Promise((r) => setTimeout(() => r('slow'), 50)),
      Promise.resolve('fast'),
    ]);
    expect(result).toEqual(['slow', 'fast']);
  });

  it('should reject if any promise rejects', async () => {
    await expect(
      promiseAll([Promise.resolve(1), Promise.reject('error'), Promise.resolve(3)])
    ).rejects.toBe('error');
  });

  it('should resolve empty array for empty input', async () => {
    const result = await promiseAll([]);
    expect(result).toEqual([]);
  });

  it('should handle non-promise values', async () => {
    const result = await promiseAll([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle mix of promises and values', async () => {
    const result = await promiseAll([1, Promise.resolve(2), 3]);
    expect(result).toEqual([1, 2, 3]);
  });
});
