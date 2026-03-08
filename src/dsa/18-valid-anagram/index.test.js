import { describe, it, expect } from 'vitest';
import { isAnagram } from './index';

describe('isAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('should return false for different lengths', () => {
    expect(isAnagram('ab', 'abc')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  it('should handle single characters', () => {
    expect(isAnagram('a', 'a')).toBe(true);
    expect(isAnagram('a', 'b')).toBe(false);
  });

  it('should handle repeated characters', () => {
    expect(isAnagram('aab', 'baa')).toBe(true);
    expect(isAnagram('aab', 'bba')).toBe(false);
  });
});
