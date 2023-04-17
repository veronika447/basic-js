const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // if (typeof data == 'function')
  //   throw new Error('Invalid date!');
  if (typeof date == 'undefined')
    return 'Unable to determine the time of year!';
  try {
    date.getFullYear();

  } catch (error) {
    throw new Error('Invalid date!');

  }
  let month = date.getMonth();
  if (month <= 1 || month === 11)
    return 'winter';
  if (month > 1 && month <= 4)
    return 'spring';
  if (month > 4 && month <= 7)
    return 'summer';
  return 'autumn'

}
// console.log(new Date(980, 3, 24, 13, 19, 31, 268));

// getSeason('foo'),
//   getSeason({ John: 'Smith' }),
//   getSeason(20192701),
//   getSeason([2019, '27', 0 + '1']),
//   getSeason(() => new Date())

module.exports = {
  getSeason
};
