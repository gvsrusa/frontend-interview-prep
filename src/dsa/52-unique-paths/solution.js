/** Top-down (memoization) */
export function uniquePathsMemo(m, n, memo = new Map()) {
  if (m === 1 || n === 1) return 1;
  const key = `${m},${n}`;
  if (memo.has(key)) return memo.get(key);
  const result = uniquePathsMemo(m - 1, n, memo) + uniquePathsMemo(m, n - 1, memo);
  memo.set(key, result);
  return result;
}

/** Bottom-up (tabulation) — O(n) space */
export function uniquePaths(m, n) {
  const row = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      row[j] += row[j - 1];
    }
  }

  return row[n - 1];
}
