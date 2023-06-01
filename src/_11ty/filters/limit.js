/**
 * Limit
 * Limits size of array
 * @param {Array} - Source array
 * @param {Number} size - Number of item to slice
 * @returns {String} - sliced array
 */
function limit(array, size) {
  if (typeof size !== "number") {
    throw new Error("Limit must be a number");
  }
  return array.slice(0, size);
}

module.exports = limit;
