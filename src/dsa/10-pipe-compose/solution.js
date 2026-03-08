/**
 * @param {...Function} fns
 * @returns {Function}
 */
export function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

/**
 * @param {...Function} fns
 * @returns {Function}
 */
export function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}
