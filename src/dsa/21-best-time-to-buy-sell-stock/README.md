# Best Time to Buy and Sell Stock

## Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve. If no profit is possible, return 0.

## Examples

```
Input: prices = [7, 1, 5, 3, 6, 4]
Output: 5  (Buy on day 2 at price 1, sell on day 5 at price 6)

Input: prices = [7, 6, 4, 3, 1]
Output: 0  (No profitable transaction possible)
```

## Constraints

- 0 <= prices.length <= 10⁵
- 0 <= prices[i] <= 10⁴
- You must buy before you sell (can't sell on a previous day).

## Complexity

- **Time:** O(n) — single pass through the array
- **Space:** O(1)
