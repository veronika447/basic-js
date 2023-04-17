const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = n.toString().split('')
  let min = arr[0];
  let indexMin = 0;
  arr.forEach((el, i) => {
    if (el <= min) {
      min = el;
      indexMin = i
    }
  })
  arr.splice(indexMin, 1)
  return Number(arr.join(''))
}

console.log(deleteDigit(342))

module.exports = {
  deleteDigit
};
