# Valid Palindrome

## Description

Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

## Examples

```
Input: "A man, a plan, a canal: Panama"
Output: true

Input: "race a car"
Output: false

Input: " "
Output: true
```

## Constraints

- 0 <= s.length <= 2 × 10⁵
- `s` consists only of printable ASCII characters.
- Ignore non-alphanumeric characters.
- Comparison is case-insensitive.

## Complexity

- **Time:** O(n) where n is the length of the string
- **Space:** O(1) — two-pointer approach uses constant extra space
