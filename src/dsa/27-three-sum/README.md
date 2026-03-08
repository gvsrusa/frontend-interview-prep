# Three Sum

## Description

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. The solution set must not contain duplicate triplets.

## Examples

```
Input: nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]

Input: nums = [0, 1, 1]
Output: []

Input: nums = [0, 0, 0]
Output: [[0, 0, 0]]
```

## Constraints

- 0 <= nums.length <= 3000
- -10⁵ <= nums[i] <= 10⁵
- No duplicate triplets in the output.

## Complexity

- **Time:** O(n²) — sort is O(n log n), then O(n) iterations each with O(n) two-pointer scan
- **Space:** O(1) extra space (excluding the output)
