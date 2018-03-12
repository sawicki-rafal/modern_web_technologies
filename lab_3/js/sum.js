"use strict";

function sum(a, b) {
    return a + b;
}

function sum2() {
    let sum = 0;
    let i;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(3, 4));
console.log(sum(44, 4));
console.log(sum2(1, 2, 3, 4));
