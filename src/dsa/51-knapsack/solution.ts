/** Top-down (memoization) */
export function knapsackMemo(weights: number[], values: number[], capacity: number): number {
  const n = weights.length;
  const memo = new Map<string, number>();

  function dp(i: number, w: number): number {
    if (i === n || w === 0) return 0;
    const key = `${i},${w}`;
    if (memo.has(key)) return memo.get(key)!;

    let result: number;
    if (weights[i] > w) {
      result = dp(i + 1, w);
    } else {
      result = Math.max(dp(i + 1, w), values[i] + dp(i + 1, w - weights[i]));
    }
    memo.set(key, result);
    return result;
  }

  return dp(0, capacity);
}

/** Bottom-up (tabulation) — O(capacity) space */
export function knapsack(weights: number[], values: number[], capacity: number): number {
  const n = weights.length;
  const dp = new Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }

  return dp[capacity];
}
