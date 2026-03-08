# Coin Change

## Description

Given an array of coin denominations `coins` and a target `amount`, return the fewest number of coins needed to make that amount. If it's not possible, return `-1`. You may use each coin denomination an unlimited number of times.

## Examples

```
Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 5 + 5 + 1 = 11

Input: coins = [2], amount = 3
Output: -1

Input: coins = [1], amount = 0
Output: 0
```

## Constraints

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

## Complexity

- **Time:** O(amount × coins.length)
- **Space:** O(amount)
