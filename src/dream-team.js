const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let str = '';
  let filteredArr = members.filter((name) => typeof name === 'string');
  let newestArr = []
  for(let name of filteredArr) {
      newestArr.push(name.toUpperCase().trim());
  }
  let sortedArr = newestArr.sort();
  console.log(sortedArr);
  for (let i = 0; i < newestArr.length; i++) {
    str += (newestArr[i].charAt(0));
  }
    return str;
 }

module.exports = {
  createDreamTeam
};
