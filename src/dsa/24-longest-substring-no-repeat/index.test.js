import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from './index';

describe('lengthOfLongestSubstring', () => {
  it('should find longest substring in basic case', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('should handle all same characters', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('should handle mixed repeats', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('should handle empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('should handle all unique characters', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });

  it('should handle single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  it('should handle spaces and special chars', () => {
    expect(lengthOfLongestSubstring('ab cd')).toBe(5);
  });
});
