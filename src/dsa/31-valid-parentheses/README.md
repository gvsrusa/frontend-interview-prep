# Valid Parentheses

## Description

Given a string `s` containing only the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid. A string is valid if:

1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Examples

```
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([{}])"
Output: true
```

## Constraints

- `0 <= s.length <= 10^4`
- `s` consists only of parentheses characters `()[]{}`.

## Complexity

- **Time:** O(n) where n is the length of the string
- **Space:** O(n) for the stack in the worst case
