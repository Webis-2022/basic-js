const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let nameMap = new Map();

  names.forEach((name) => {
    if(!nameMap.has(name)) {
      result.push(name);
      nameMap.set(name, 1);
    }
    else {
      let count = nameMap.get(name);
      let newName = `${name}(${count})`;

      while(nameMap.has(newName)) {
        count += 1;
        newName = `${name}(${count})`;
      }

      result.push(newName);
      nameMap.set(newName, 1);
      nameMap.set(name, count + 1);
    }
  })
  return result;
}

module.exports = {
  renameFiles
};
