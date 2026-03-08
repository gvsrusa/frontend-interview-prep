/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of t) {
    const c = count.get(char);
    if (!c) return false;
    count.set(char, c - 1);
  }

  return true;
}
