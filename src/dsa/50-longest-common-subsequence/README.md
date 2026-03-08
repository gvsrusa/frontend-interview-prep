# Longest Common Subsequence

## Description

Given two strings `text1` and `text2`, return the length of their longest common subsequence. A subsequence is a sequence derived by deleting some (or no) characters without changing the relative order of the remaining characters.

## Examples

```
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The LCS is "ace".

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: No common subsequence exists.
```

## Constraints

- `1 <= text1.length, text2.length <= 1000`
- `text1` and `text2` consist of lowercase English letters only.

## Complexity

- **Time:** O(m × n) where m and n are the lengths of the two strings
- **Space:** O(m × n) for the DP table, or O(min(m, n)) with space optimization
