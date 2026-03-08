# Container With Most Water

## Description

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water a container can store.

## Examples

```
Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49  (between lines at index 1 and 8)

Input: height = [1, 1]
Output: 1
```

## Constraints

- 2 <= height.length <= 10⁵
- 0 <= height[i] <= 10⁴
- You may not slant the container.

## Complexity

- **Time:** O(n) — single pass with two pointers
- **Space:** O(1)
