const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  const a = Number(sampleActivity);
  if (!a || (a <= 0 || a >= MODERN_ACTIVITY)) return false;
  const l = HALF_LIFE_PERIOD / Math.log(2);
  const result = l * Math.log(MODERN_ACTIVITY / a);
  return Math.ceil(result);
}

console.log(dateSample("1.1"));
console.log(dateSample("3.142"));
console.log(dateSample("9"));
console.log(dateSample("11"));
console.log(dateSample("WOOT!"));

module.exports = {
  dateSample,
};
