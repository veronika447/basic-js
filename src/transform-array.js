const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let result = arr.slice();
  let isDeleted = false;
  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    if (((element == '--discard-next' || element == '--double-next') && i === result.length - 1) || ((element == '--discard-prev' || element == '--double-prev') && i === 0)) {
      result.splice(i, 1);
      i--;
    }
    else {
      if (element == '--discard-next') {
        isDeleted = true;
        result.splice(i, 2);
        i--;
        continue;
      }
      if (element == '--discard-prev') {
        if (!isDeleted) {
          result.splice(i - 1, 2)
          i -= 2;
        }
        else {
          result.splice(i, 1);
          i--;
        }
      }
      if (element == '--double-next')
        result.splice(i, 1, result[i + 1]);
      if (element == '--double-prev') {
        if (!isDeleted) { result.splice(i, 1, result[i - 1]) }
        else {
          result.splice(i, 1);
          i--;
        }
      }
    }
    isDeleted = false;
  }
  return result
}

module.exports = {
  transform
};
