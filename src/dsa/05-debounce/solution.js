function debounce(fn, delay) {
  let timerId = null;
  let lastArgs = null;
  const debounced = function(...args) {
    lastArgs = args;
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      timerId = null;
      fn(...args);
      lastArgs = null;
    }, delay);
  };
  debounced.cancel = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
      lastArgs = null;
    }
  };
  debounced.flush = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
      if (lastArgs !== null) {
        fn(...lastArgs);
        lastArgs = null;
      }
    }
  };
  return debounced;
}
export {
  debounce
};
