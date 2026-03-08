/**
 * @param {Function} fn
 * @param {number} interval
 * @param {{ leading?: boolean, trailing?: boolean }} [options]
 * @returns {Function}
 */
export function throttle(fn, interval, options = { leading: true, trailing: true }) {
  let lastCallTime = 0;
  let timerId = null;
  let lastArgs = null;
  let isFirstCall = true;

  const { leading, trailing } = options;

  return function throttled(...args) {
    const now = Date.now();

    if (isFirstCall && leading === false) {
      lastCallTime = now;
      isFirstCall = false;
    }

    const timeSinceLastCall = now - lastCallTime;

    if (timeSinceLastCall >= interval && (leading !== false || !isFirstCall)) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      lastCallTime = now;
      isFirstCall = false;
      fn(...args);
    } else if (trailing !== false) {
      lastArgs = args;
      if (!timerId) {
        const remaining = interval - timeSinceLastCall;
        timerId = setTimeout(() => {
          lastCallTime = leading === false ? 0 : Date.now();
          isFirstCall = leading === false;
          timerId = null;
          fn(...lastArgs);
          lastArgs = null;
        }, remaining);
      }
    }
  };
}
