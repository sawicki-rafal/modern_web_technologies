"use strict";
function gcd(a, b) {
    while (b !== 0) {
        let c = a % b;
        a = b;
        b = c;
    }
    return a;
}

function extendedGCD(a, b) {
    let a1 = a;
    let b1 = b;
    let x = 1;
    let y = 0;
    let r = 0;
    let s = 1;
    while (b !== 0) {
        let c = a % b;
        let q = Math.floor(a / b);
        a = b;
        b = c;
        let r1 = r;
        let s1 = s;
        r = x - q * r;
        s = y - q * s;
        x = r1;
        y = s1;
    }
    console.log(a1 + " * " + x + " + " + b1 + " * " + y + " = " + a);
}

console.log(gcd(4, 12));
console.log(gcd(12, 4));
console.log(gcd(12, 37));
console.log(gcd(121, 11));
console.log(gcd(1234567, 8976));
extendedGCD(4,12);
extendedGCD(5,60);
extendedGCD(24,60);