/** Top-down (memoization) */
export function coinChangeMemo(coins: number[], amount: number): number {
  const memo = new Map<number, number>();

  function dp(remaining: number): number {
    if (remaining === 0) return 0;
    if (remaining < 0) return -1;
    if (memo.has(remaining)) return memo.get(remaining)!;

    let min = Infinity;
    for (const coin of coins) {
      const sub = dp(remaining - coin);
      if (sub >= 0) min = Math.min(min, sub + 1);
    }
    const result = min === Infinity ? -1 : min;
    memo.set(remaining, result);
    return result;
  }

  return dp(amount);
}

/** Bottom-up (tabulation) */
export function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
