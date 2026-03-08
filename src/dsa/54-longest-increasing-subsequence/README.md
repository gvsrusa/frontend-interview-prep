# Longest Increasing Subsequence

## Description

Given an integer array `nums`, return the length of the longest **strictly increasing** subsequence.

## Examples

```
Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]
Output: 4
Explanation: One LIS is [2, 3, 7, 101].

Input: nums = [0, 1, 0, 3, 2, 3]
Output: 4
```

## Constraints

- `0 <= nums.length <= 2500`
- `-10^4 <= nums[i] <= 10^4`

## Complexity

- **Time:** O(n log n) with binary search approach, O(n²) with DP
- **Space:** O(n)
