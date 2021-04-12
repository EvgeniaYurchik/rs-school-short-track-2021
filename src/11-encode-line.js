/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(1);
      arr2.push(arr[i]);
    } else if (arr[i] === arr[i - 1] || arr[i] === arr[i - 1]) {
      const ind = arr2.indexOf(arr[i]) - 1;
      const n = arr2[ind];
      arr2.splice(ind, 1, n + 1);
    } else {
      arr2.push(1);
      arr2.push(arr[i]);
    }
  }
  const arr3 = arr2.filter((item) => item !== 1);
  return arr3.join('');
}

module.exports = encodeLine;
