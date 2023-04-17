const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = '';
  let resultAdd = '';
  if (typeof str !== 'string')
    str = String(str);
  if (Object.keys(options).includes('addition')) {
    if (typeof options.addition !== 'string')
      options.addition = String(options.addition);
    if (options.additionRepeatTimes && options.additionRepeatTimes > 1) {
      if (options.additionSeparator) {
        resultAdd = options.addition + options.additionSeparator;
        resultAdd = resultAdd.repeat(options.additionRepeatTimes).slice(0, -options.additionSeparator.length)
      }
      else {
        resultAdd = options.addition + '|';
        resultAdd = resultAdd.repeat(options.additionRepeatTimes).slice(0, -1)
      }
    }
    else {
      resultAdd = options.addition
    }
  }
  if (resultAdd.length > 0) {
    resultStr = str + resultAdd;
  }
  else {
    resultStr = str
  }
  if (options.repeatTimes && options.repeatTimes > 1) {
    if (options.separator) {
      resultStr += options.separator;
      resultStr = resultStr.repeat(options.repeatTimes).slice(0, -options.separator.length)
    }
    else {
      resultStr += '+';
      resultStr = resultStr.repeat(options.repeatTimes).slice(0, -1);
    }
  }
  return resultStr;
}

module.exports = {
  repeater
};
