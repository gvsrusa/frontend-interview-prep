# Merge Intervals

## Description

Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

## Examples

```
Input: intervals = [[1,3], [2,6], [8,10], [15,18]]
Output: [[1,6], [8,10], [15,18]]

Input: intervals = [[1,4], [4,5]]
Output: [[1,5]]
```

## Constraints

- 0 <= intervals.length <= 10⁴
- intervals[i].length == 2
- 0 <= start_i <= end_i <= 10⁴

## Complexity

- **Time:** O(n log n) due to sorting
- **Space:** O(n) for the output array
