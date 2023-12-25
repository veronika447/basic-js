const { NotImplementedError } = require("../extensions/index.js");

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
  for (let i = 0; i < matrix[0].length; i += 1) {
    let isZero = false;
    for (let j = 0; j < matrix.length; j += 1) {
      if (isZero) {
        matrix[j][i] = 0;
      }
      if (matrix[j][i] === 0) {
        isZero = true;
      }
    }
  }
  const result = matrix
    .map((el) => el.reduce((acc, cur) => acc + cur, 0))
    .reduce((acc, cur) => acc + cur, 0);
  return result;
}

module.exports = {
  getMatrixElementsSum,
};
