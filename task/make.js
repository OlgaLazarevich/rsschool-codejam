module.exports = function make(a) {
  const newArr = [a];
  function f(b, ...theArgs) {
    if (typeof (b) === 'function') {
      return newArr.reduce(b);
    }
    theArgs.push(b);
    const args = [...theArgs];
    theArgs.forEach((item, i) => newArr.push(args[i]));
    return f;
  }
  return f;
};
