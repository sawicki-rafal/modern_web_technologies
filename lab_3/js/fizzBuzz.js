"use strict";
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let stringToShow = "";
        if (i % 3 == 0) {
            stringToShow += "Fizz";
        }
        if (i % 5 == 0) {
            stringToShow += "Buzz";
        }
        if (stringToShow == "") {
            stringToShow = i;
        }
        console.log(stringToShow);
    }
}

fizzBuzz();