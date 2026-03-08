import { describe, it, expect } from 'vitest';
import { promiseAllSettled } from './index';

describe('promiseAllSettled', () => {
  it('should resolve all fulfilled promises', async () => {
    const result = await promiseAllSettled([
      Promise.resolve(1),
      Promise.resolve(2),
    ]);
    expect(result).toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 2 },
    ]);
  });

  it('should handle mix of fulfilled and rejected', async () => {
    const result = await promiseAllSettled([
      Promise.resolve('ok'),
      Promise.reject('fail'),
      Promise.resolve('also ok'),
    ]);
    expect(result).toEqual([
      { status: 'fulfilled', value: 'ok' },
      { status: 'rejected', reason: 'fail' },
      { status: 'fulfilled', value: 'also ok' },
    ]);
  });

  it('should handle all rejected promises', async () => {
    const result = await promiseAllSettled([
      Promise.reject('a'),
      Promise.reject('b'),
    ]);
    expect(result).toEqual([
      { status: 'rejected', reason: 'a' },
      { status: 'rejected', reason: 'b' },
    ]);
  });

  it('should resolve empty array for empty input', async () => {
    const result = await promiseAllSettled([]);
    expect(result).toEqual([]);
  });

  it('should handle non-promise values', async () => {
    const result = await promiseAllSettled([1, 'two', true]);
    expect(result).toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 'two' },
      { status: 'fulfilled', value: true },
    ]);
  });

  it('should maintain input order', async () => {
    const result = await promiseAllSettled([
      new Promise((r) => setTimeout(() => r('slow'), 50)),
      Promise.resolve('fast'),
    ]);
    expect(result[0]).toEqual({ status: 'fulfilled', value: 'slow' });
    expect(result[1]).toEqual({ status: 'fulfilled', value: 'fast' });
  });
});
