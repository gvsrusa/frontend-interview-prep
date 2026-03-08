/**
 * @param {Array} arr
 * @param {Function} callback
 * @param {*} [thisArg]
 * @returns {Array}
 */
export function myFilter(arr, callback, thisArg) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
