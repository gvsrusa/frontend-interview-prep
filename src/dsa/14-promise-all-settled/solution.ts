/**
 * @param {Array<Promise|*>} promises
 * @returns {Promise<Array<{status: string, value?: *, reason?: *}>>}
 */
export function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(promises.length);
    let settledCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          results[index] = { status: 'fulfilled', value };
          settledCount++;
          if (settledCount === promises.length) resolve(results);
        },
        (reason) => {
          results[index] = { status: 'rejected', reason };
          settledCount++;
          if (settledCount === promises.length) resolve(results);
        }
      );
    });
  });
}
