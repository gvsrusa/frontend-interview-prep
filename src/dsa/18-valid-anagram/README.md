# Valid Anagram

## Description

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An anagram is a word formed by rearranging the letters of another word, using all the original letters exactly once.

## Examples

```
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

Input: s = "", t = ""
Output: true
```

## Constraints

- 0 <= s.length, t.length <= 5 × 10⁴
- `s` and `t` consist of lowercase English letters.

## Complexity

- **Time:** O(n) where n is the length of the strings
- **Space:** O(1) since the alphabet is fixed (26 lowercase letters)
