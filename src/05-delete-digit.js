/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const arr3 = [...arr];
    arr3.splice(i, 1);
    arr2.push(+arr3.join(''));
  }
  return arr2.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
