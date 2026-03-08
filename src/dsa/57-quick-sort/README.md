# Quick Sort

## Description

Implement the quicksort algorithm with a partition step. Given an array of numbers, return a new sorted array in ascending order. Do not mutate the input.

## Examples

```
Input: [10, 7, 8, 9, 1, 5]
Output: [1, 5, 7, 8, 9, 10]

Input: [3, 6, 8, 3, 6]
Output: [3, 3, 6, 6, 8]
```

## Constraints

- `0 <= nums.length <= 10^4`
- `-10^5 <= nums[i] <= 10^5`

## Complexity

- **Time:** O(n log n) average, O(n²) worst case
- **Space:** O(log n) average for recursion stack
