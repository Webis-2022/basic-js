const { NotImplementedError } = require('../lib');

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
  const arr = n.toString();
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    let newNum = arr.slice(0, i) + arr.slice(i + 1);
      newArr.push(Number(newNum));
  }
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit
};
