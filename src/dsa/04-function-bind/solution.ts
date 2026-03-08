/**
 * @param {Function} fn
 * @param {*} thisArg
 * @param {...*} partialArgs
 * @returns {Function}
 */
export function myBind(fn, thisArg, ...partialArgs) {
  return function bound(...args) {
    if (new.target) {
      return new fn(...partialArgs, ...args);
    }
    return fn.apply(thisArg, [...partialArgs, ...args]);
  };
}
