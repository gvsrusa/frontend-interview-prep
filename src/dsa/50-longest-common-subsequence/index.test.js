import { describe, it, expect } from 'vitest';
import { longestCommonSubsequence } from './index';

describe('Longest Common Subsequence', () => {
  it('should return 3 for "abcde" and "ace"', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
  });

  it('should return 3 for "abc" and "abc"', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
  });

  it('should return 0 for "abc" and "def"', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });

  it('should handle empty first string', () => {
    expect(longestCommonSubsequence('', 'abc')).toBe(0);
  });

  it('should handle empty second string', () => {
    expect(longestCommonSubsequence('abc', '')).toBe(0);
  });

  it('should handle single character match', () => {
    expect(longestCommonSubsequence('a', 'a')).toBe(1);
  });

  it('should handle longer strings', () => {
    expect(longestCommonSubsequence('oxcpqrsvwf', 'shmtulqrypy')).toBe(2);
  });
});
