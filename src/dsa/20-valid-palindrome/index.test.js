import { describe, it, expect } from 'vitest';
import { isPalindrome } from './index';

describe('isPalindrome', () => {
  it('should return true for a valid palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return false for non-palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should handle string with only non-alphanumeric chars', () => {
    expect(isPalindrome(' ')).toBe(true);
    expect(isPalindrome('.,!?')).toBe(true);
  });

  it('should handle numeric palindrome', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isPalindrome('Aa')).toBe(true);
  });
});
