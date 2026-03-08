# Longest Substring Without Repeating Characters

## Description

Given a string `s`, find the length of the longest substring without repeating characters.

## Examples

```
Input: s = "abcabcbb"
Output: 3  (substring "abc")

Input: s = "bbbbb"
Output: 1  (substring "b")

Input: s = "pwwkew"
Output: 3  (substring "wke")
```

## Constraints

- 0 <= s.length <= 5 × 10⁴
- `s` consists of English letters, digits, symbols, and spaces.

## Complexity

- **Time:** O(n) — sliding window with each character visited at most twice
- **Space:** O(min(n, m)) where m is the size of the character set
