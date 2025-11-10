const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('');
  let index = arr.lastIndexOf('@');
  console.log(index)
  let domain = arr.slice(index + 1);
  return domain.join('');
}

module.exports = {
  getEmailDomain
};
