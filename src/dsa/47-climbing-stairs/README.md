# Climbing Stairs

## Description

You are climbing a staircase that has `n` steps. Each time you can climb either 1 or 2 steps. Return the number of distinct ways you can reach the top.

## Examples

```
Input: n = 2
Output: 2
Explanation: 1+1, 2

Input: n = 3
Output: 3
Explanation: 1+1+1, 1+2, 2+1
```

## Constraints

- `0 <= n <= 45`

## Complexity

- **Time:** O(n)
- **Space:** O(1) with bottom-up optimization, O(n) with memoization
