module.exports = function make(a) {
  let newArr = [a];
  function f(b) {
    if (typeof (b) === 'function') {
      return newArr.reduce(b);
    }
    let args = [...arguments];
    args.forEach((item, i, arr) => newArr.push(args[i]));
    return f;
  }
  return f;
};

function sum(a, b) {
  return a + b;
}
