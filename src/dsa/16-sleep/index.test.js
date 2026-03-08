import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { sleep } from './index';

describe('sleep', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('should return a promise', () => {
    const result = sleep(100);
    expect(result).toBeInstanceOf(Promise);
  });

  it('should resolve after the specified delay', async () => {
    const fn = vi.fn();
    sleep(100).then(fn);
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    await Promise.resolve();
    expect(fn).toHaveBeenCalled();
  });

  it('should resolve with the given value', async () => {
    const promise = sleep(50, 'done');
    vi.advanceTimersByTime(50);
    const result = await promise;
    expect(result).toBe('done');
  });

  it('should resolve with undefined when no value given', async () => {
    const promise = sleep(50);
    vi.advanceTimersByTime(50);
    const result = await promise;
    expect(result).toBeUndefined();
  });

  it('should not resolve before the delay', async () => {
    const fn = vi.fn();
    sleep(200).then(fn);
    vi.advanceTimersByTime(100);
    await Promise.resolve();
    expect(fn).not.toHaveBeenCalled();
  });

  it('should work with zero delay', async () => {
    const promise = sleep(0, 'instant');
    vi.advanceTimersByTime(0);
    const result = await promise;
    expect(result).toBe('instant');
  });
});
