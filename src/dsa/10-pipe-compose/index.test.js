import { describe, it, expect } from 'vitest';
import { pipe, compose } from './index';

describe('pipe', () => {
  it('should apply functions left to right', () => {
    const add1 = (x) => x + 1;
    const double = (x) => x * 2;
    expect(pipe(add1, double)(5)).toBe(12);
  });

  it('should work with a single function', () => {
    const add1 = (x) => x + 1;
    expect(pipe(add1)(5)).toBe(6);
  });

  it('should work with string transformations', () => {
    const upper = (s) => s.toUpperCase();
    const exclaim = (s) => s + '!';
    expect(pipe(upper, exclaim)('hello')).toBe('HELLO!');
  });

  it('should return identity for no functions', () => {
    expect(pipe()(42)).toBe(42);
  });
});

describe('compose', () => {
  it('should apply functions right to left', () => {
    const add1 = (x) => x + 1;
    const double = (x) => x * 2;
    expect(compose(add1, double)(5)).toBe(11);
  });

  it('should work with a single function', () => {
    const add1 = (x) => x + 1;
    expect(compose(add1)(5)).toBe(6);
  });

  it('should be the reverse of pipe', () => {
    const add1 = (x) => x + 1;
    const double = (x) => x * 2;
    const triple = (x) => x * 3;
    expect(compose(triple, double, add1)(1)).toBe(pipe(add1, double, triple)(1));
  });
});
