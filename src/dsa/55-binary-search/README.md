# Binary Search

## Description

Given a sorted array of integers `nums` and a `target` value, return the index of `target` if it exists in the array, or `-1` if it does not.

## Examples

```
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4

Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
Output: -1
```

## Constraints

- `0 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- All integers in `nums` are unique.
- `nums` is sorted in ascending order.

## Complexity

- **Time:** O(log n)
- **Space:** O(1) iterative, O(log n) recursive
