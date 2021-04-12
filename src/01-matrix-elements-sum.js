/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum1;
  if (typeof matrix[0] === 'number') {
    sum1 = matrix.reduce((sum2, current) => sum2 + current);
  } else {
    sum1 = matrix[0].reduce((sum2, current) => sum2 + current);
    for (let i = 1; i < matrix.length; i++) {
      for (let n = 0; n < matrix[i].length; n++) {
        if (matrix[i - 1][n] > 0) {
          sum1 += matrix[i][n];
        }
      }
    }
  }
  return sum1;
}

module.exports = getMatrixElementsSum;
