# Fibonacci Number

## Description

Compute the `n`th Fibonacci number. The Fibonacci sequence is defined as:

- `F(0) = 0`
- `F(1) = 1`
- `F(n) = F(n-1) + F(n-2)` for `n > 1`

Implement an efficient solution using memoization or iteration.

## Examples

```
Input: n = 5
Output: 5
Explanation: 0, 1, 1, 2, 3, 5

Input: n = 10
Output: 55
```

## Constraints

- `0 <= n <= 45`

## Complexity

- **Time:** O(n)
- **Space:** O(1) with iterative approach, O(n) with memoization
