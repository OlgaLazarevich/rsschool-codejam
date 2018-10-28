const assert = require('assert');
const make = require('../task/make.js');


describe('make', () => {
  it('6', () => {
    const count = make(15)(34)((a,b) => a+b));
    assert.deepEqual(count, 49);
  });
});