import { describe, it, expect } from 'vitest';
import { fibonacci } from './index';

describe('Fibonacci Number', () => {
  it('should return 0 for n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('should return 1 for n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('should return 1 for n = 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  it('should return 5 for n = 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  it('should return 55 for n = 10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('should handle larger input n = 30', () => {
    expect(fibonacci(30)).toBe(832040);
  });

  it('should return 0 for negative input', () => {
    expect(fibonacci(-1)).toBe(0);
  });
});
