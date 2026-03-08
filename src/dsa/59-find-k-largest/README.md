# Find K Largest Elements

## Description

Given an integer array `nums` and an integer `k`, return the `k` largest elements in descending order.

## Examples

```
Input: nums = [3, 2, 1, 5, 6, 4], k = 2
Output: [6, 5]

Input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
Output: [6, 5, 5, 4]
```

## Constraints

- `1 <= k <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`

## Complexity

- **Min-heap:** Time O(n log k), Space O(k)
- **Quickselect:** Time O(n) average / O(n²) worst, Space O(1) extra
