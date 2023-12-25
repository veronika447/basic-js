const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.counter = 1;
  }
  calculateDepth(arr) {
    // throw new NotImplementedError("Not implemented");
    this.counter += 1;
    arr = arr.flat();
    this.arr = arr;
    if (arr.filter((el) => Array.isArray(el)).length === 0) {
      const result = this.counter;
      this.counter = 1;
      return result;
    }
    return this.calculateDepth(this.arr);
  }
}

module.exports = {
  DepthCalculator,
};
