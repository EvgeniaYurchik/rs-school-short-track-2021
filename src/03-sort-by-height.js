/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrRes = [];
  const arrRes2 = [];
  const arrRes3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arrRes.push(-1);
    } else {
      arrRes.push(1);
      arrRes2.push(arr[i]);
    }
  }
  arrRes2.sort((a, b) => a - b);
  for (let a = 0; a < arrRes.length; a++) {
    if (arrRes[a] < 0) {
      arrRes3.push(-1);
    } else {
      arrRes3.push(arrRes2[0]);
      arrRes2.splice(0, 1);
    }
  }
  return arrRes3;
}

module.exports = sortByHeight;
