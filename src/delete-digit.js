const { NotImplementedError } = require("../extensions/index.js");

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
  const str = n.toString();
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {
    const a = str[i];
    const str1 = str.replace(a, "");
    arr.push(str1);
  }
  arr = arr.sort((a, b) => b - a);
  const result = arr[0];
  return Number(result);
}

module.exports = {
  deleteDigit,
};
