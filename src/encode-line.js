const { NotImplementedError } = require("../extensions/index.js");

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
  const arr = str.split("");
  let counter = 1;
  let len = 1;
  for (let i = 1; i <= arr.length; i += 1) {
    if (arr[i] === arr[i - 1]) {
      counter += 1;
      if (arr[i] === arr[i + 1]) {
        len += 1;
      }
      if (arr[i] !== arr[i + 1]) {
        arr.splice(i - len, len, counter);
        i = i - len - 1;
        counter = 1;
        len = 1;
      }
    }
  }
  return arr.join("");
}

module.exports = {
  encodeLine,
};
