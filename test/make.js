const assert = require('assert');
const make = require('../task/make.js');
// 15	34	49


function sum(a, b) {
      return a + b;
    }
    
describe('make', () => {
  it('6', () => {
    const count = make(15)(34)(sum);
    assert.equal(count, 49);
  });
});