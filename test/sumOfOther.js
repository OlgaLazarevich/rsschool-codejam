const assert = require('assert');
const sumOfOther = require('../task/sumOfOther.js');

describe('sumOfOther', () => {
  it('0', () => {
    const count = sumOfOther([1,1,1]);
    assert.equal(count, [2, 2, 2].toString());
  });
  it('2', () => {
    const count = sumOfOther([2, 3, 4, 1]);
    assert.equal(count, [8, 7, 6, 9].toString());
  });
  it('3', () => {
    const count = sumOfOther([10, 11, 1, 2]);
    assert.equal(count, [14, 13, 23, 22].toString());
  });
});