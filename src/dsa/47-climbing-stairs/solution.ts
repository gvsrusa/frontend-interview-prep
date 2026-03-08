/** Top-down (memoization) */
export function climbStairsMemo(n: number, memo: Map<number, number> = new Map()): number {
  if (n <= 1) return 1;
  if (memo.has(n)) return memo.get(n)!;
  const result = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}

/** Bottom-up (tabulation) — O(1) space */
export function climbStairs(n: number): number {
  if (n <= 1) return 1;
  let prev2 = 1;
  let prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
