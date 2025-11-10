const { NotImplementedError } = require('../lib');

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
  let res = '';
  if(!options.hasOwnProperty('separator'))
      options['separator'] = '+';
  if (!options.hasOwnProperty('additionSeparator'))
      options['additionSeparator'] = '|';
  if (!options.hasOwnProperty('addition')) {
    options.addition = '';
  }
  str = String(str);
  const addition = String(options.addition);
  const additionStr = new Array(options.additionRepeatTimes)
    .fill(addition)
    .join(options.additionSeparator);

  res = new Array(options.repeatTimes)
    .fill(str + additionStr)
    .join(options.separator);

  return res;
}

module.exports = {
  repeater
};
