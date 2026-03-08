import { describe, it, expect, vi } from 'vitest';
import { memoize } from './index';

describe('memoize', () => {
  it('should cache results for same arguments', () => {
    const fn = vi.fn((x: number) => x * 2);
    const memoized = memoize(fn);
    expect(memoized(5)).toBe(10);
    expect(memoized(5)).toBe(10);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('should compute for different arguments', () => {
    const fn = vi.fn((x: number) => x * 2);
    const memoized = memoize(fn);
    expect(memoized(5)).toBe(10);
    expect(memoized(10)).toBe(20);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should handle multiple arguments', () => {
    const add = vi.fn((a: number, b: number) => a + b);
    const memoized = memoize(add);
    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(memoized(2, 1)).toBe(3);
    expect(add).toHaveBeenCalledTimes(2);
  });

  it('should support custom key resolver', () => {
    const fn = vi.fn((obj: { id: number }) => obj.id * 2);
    const memoized = memoize(fn, (obj) => String(obj.id));
    expect(memoized({ id: 1 })).toBe(2);
    expect(memoized({ id: 1 })).toBe(2);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('should handle string arguments', () => {
    const upper = memoize((s: string) => s.toUpperCase());
    expect(upper('hello')).toBe('HELLO');
    expect(upper('hello')).toBe('HELLO');
  });

  it('should handle zero-argument functions', () => {
    let count = 0;
    const fn = memoize(() => ++count);
    expect(fn()).toBe(1);
    expect(fn()).toBe(1);
  });
});
