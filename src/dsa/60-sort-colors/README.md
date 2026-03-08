# Sort Colors

## Description

Given an array `nums` containing only `0`, `1`, and `2` (representing red, white, and blue), sort the array **in-place** so that all `0`s come first, then `1`s, then `2`s. Do not use a library sort function. Solve it in one pass using constant extra space (Dutch National Flag algorithm).

## Examples

```
Input: nums = [2, 0, 2, 1, 1, 0]
Output: [0, 0, 1, 1, 2, 2]

Input: nums = [2, 0, 1]
Output: [0, 1, 2]
```

## Constraints

- `0 <= nums.length <= 300`
- `nums[i]` is `0`, `1`, or `2`.

## Complexity

- **Time:** O(n) — single pass
- **Space:** O(1) — in-place
