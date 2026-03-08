/**
 * @param {number} ms
 * @param {*} [value]
 * @returns {Promise}
 */
export function sleep(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}
