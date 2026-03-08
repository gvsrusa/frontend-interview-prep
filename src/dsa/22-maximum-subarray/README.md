# Maximum Subarray

## Description

Given an integer array `nums`, find the subarray with the largest sum, and return its sum. A subarray is a contiguous non-empty sequence of elements.

## Examples

```
Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6  (subarray [4, -1, 2, 1] has the largest sum)

Input: nums = [1]
Output: 1

Input: nums = [5, 4, -1, 7, 8]
Output: 23
```

## Constraints

- 1 <= nums.length <= 10⁵
- -10⁴ <= nums[i] <= 10⁴

## Complexity

- **Time:** O(n) using Kadane's algorithm
- **Space:** O(1)
