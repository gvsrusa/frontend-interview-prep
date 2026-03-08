# 0/1 Knapsack

## Description

Given `n` items, each with a weight and a value, determine the maximum total value you can carry in a knapsack of capacity `capacity`. Each item can be included at most once (0/1 choice).

## Examples

```
Input: weights = [1, 2, 3], values = [6, 10, 12], capacity = 5
Output: 22
Explanation: Take items with weights 2 and 3 for values 10 + 12 = 22.

Input: weights = [10], values = [100], capacity = 5
Output: 0
Explanation: The single item is too heavy.
```

## Constraints

- `0 <= n <= 100`
- `0 <= weights[i], values[i] <= 1000`
- `0 <= capacity <= 1000`

## Complexity

- **Time:** O(n × capacity)
- **Space:** O(capacity) with 1D optimization, O(n × capacity) with 2D table
