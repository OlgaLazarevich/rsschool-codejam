'use strict';

module.exports = function sumOfOther(arr) {
  const total = arr.reduce((a, b) => a + b);
  return arr.map(i => total - i)
}