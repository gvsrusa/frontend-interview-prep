/** Top-down (memoization) */
export function fibonacciMemo(n, memo = new Map()) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (memo.has(n)) return memo.get(n);
  const result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}

/** Bottom-up (tabulation) — O(1) space */
export function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let prev2 = 0;
  let prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
