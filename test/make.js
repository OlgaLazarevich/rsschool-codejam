const assert = require('assert');
const make = require('../task/make.js');

describe('make', () => {
  it('0', () => {
    const count = make(15)(34, 21, 666)(41)((a, b) => a + b);
    assert.deepEqual(count, 777);
  });
  it('1', () => {
    const count = make(15)(34)((a, b) => a + b);
    assert.deepEqual(count, 49);
  });
  it('2', () => {
    const count = make(49)(21)((a, b) => a + b);
    assert.deepEqual(count, 70);
  });
  it('3', () => {
    const count = make(70)(666)((a, b) => a + b);
    assert.deepEqual(count, 736);
  });
  it('4', () => {
    const count = make(736)(41)((a, b) => a + b);
    assert.deepEqual(count, 777);
  });
});
