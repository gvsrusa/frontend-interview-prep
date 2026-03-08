# Product of Array Except Self

## Description

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. You must solve it without using the division operator and in O(n) time.

## Examples

```
Input: nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]

Input: nums = [-1, 1, 0, -3, 3]
Output: [0, 0, 9, 0, 0]
```

## Constraints

- 2 <= nums.length <= 10⁵
- -30 <= nums[i] <= 30
- The product of any prefix or suffix is guaranteed to fit in a 32-bit integer.
- **Do not use division.**

## Complexity

- **Time:** O(n) — two passes through the array
- **Space:** O(1) extra space (output array doesn't count)
