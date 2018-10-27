"use strict";
function make(first) {
    let firstArg = [...arguments];

    return function (second) {
        
        let secondArg = [...arguments],
            allArgs = [...firstArg, ...secondArg];

        return  (fun) => allArgs.reduce(fun);
    };
}
function sum(a, b) {
    return a + b;
}