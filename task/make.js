module.exports = function make(a) {
  const newArr = [a];
  function f(b) {
    if (typeof (b) === 'function') {
      return newArr.reduce(b);
    }
    const args = [...arguments];
    args.forEach((item, i) => newArr.push(args[i]));
    return f;
  }
  return f;
};
