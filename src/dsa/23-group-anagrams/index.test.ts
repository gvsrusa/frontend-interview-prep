import { describe, it, expect } from 'vitest';
import { groupAnagrams } from './index';

function sortGroups(groups: string[][]): string[][] {
  return groups.map((g) => [...g].sort()).sort((a, b) => a[0].localeCompare(b[0]));
}

describe('groupAnagrams', () => {
  it('should group anagrams together', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    const sorted = sortGroups(result);
    expect(sorted).toEqual(
      sortGroups([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
    );
  });

  it('should handle empty string input', () => {
    const result = groupAnagrams(['']);
    expect(result).toEqual([['']]);
  });

  it('should handle single character strings', () => {
    const result = groupAnagrams(['a']);
    expect(result).toEqual([['a']]);
  });

  it('should handle no anagrams', () => {
    const result = groupAnagrams(['abc', 'def', 'ghi']);
    expect(result.length).toBe(3);
  });

  it('should handle all identical strings', () => {
    const result = groupAnagrams(['aaa', 'aaa', 'aaa']);
    expect(result).toEqual([['aaa', 'aaa', 'aaa']]);
  });

  it('should handle empty array', () => {
    expect(groupAnagrams([])).toEqual([]);
  });
});
