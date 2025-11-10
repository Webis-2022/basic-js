const { NotImplementedError } = require('../lib');

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
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let result = [];
    let discarded = new Set();

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if (current === '--discard-next') {
            if (i + 1 < arr.length) {
                discarded.add(i + 1);
                i++;
            }
        } else if (current === '--discard-prev') {
            if (result.length > 0 && !discarded.has(i - 1)) {
                result.pop();
            }
        } else if (current === '--double-next') {
            if (i + 1 < arr.length) {
                result.push(arr[i + 1]);
            }
        } else if (current === '--double-prev') {
            if (i - 1 >= 0 && !discarded.has(i - 1)) {
                result.push(arr[i - 1]);
            }
        } else {
            if (!discarded.has(i)) {
                result.push(current);
            }
        }
    }

    return result;
}

module.exports = {
  transform
};
