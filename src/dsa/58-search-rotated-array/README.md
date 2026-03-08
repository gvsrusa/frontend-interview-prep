# Search in Rotated Sorted Array

## Description

Given a sorted array that has been rotated at an unknown pivot (e.g., `[4,5,6,7,0,1,2]` was originally `[0,1,2,4,5,6,7]`), search for a `target` value and return its index, or `-1` if not found. All values are unique.

## Examples

```
Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
Output: 4

Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
Output: -1
```

## Constraints

- `0 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- All values in `nums` are unique.
- `nums` was sorted in ascending order and then rotated.

## Complexity

- **Time:** O(log n)
- **Space:** O(1)
