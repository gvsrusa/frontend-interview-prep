export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T,
  keyResolver?: (...args: Parameters<T>) => string
): T {
  throw new Error('Not implemented');
}
