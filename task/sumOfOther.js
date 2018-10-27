"use strict";

function sumOfOther(arr) {
    let total = arr.reduce((a, b) => a + b);
    return arr.map(i => total - i);
}
