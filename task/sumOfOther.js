"use strict";

function sumOfOther(arr) {
  const total = arr.reduce((a, b) => a + b);
  return arr.map(i => total - i)
}

sumOfOther([1, 3, 4]); 