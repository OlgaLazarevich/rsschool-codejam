module.exports = function make(first) {
  let firstArg = [...arguments];

  return function (second) {
    const secondArg = [...arguments];
    const allArgs = [...firstArg, ...secondArg];
    return (fun) => allArgs.reduce(fun);
  };
}
// function sum(a, b) {
//   return a + b;
// }