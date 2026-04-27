'use strict'

let number1 = +prompt("n1:");
if (isNaN(number1)) {
    return alert("We must write a number, not a string");
}
let number2 = +prompt("n2:");
if (isNaN(number2)) {
    return alert("We must write a number, not a string");
}


let result = 0;

/*=========================================================================*/

let sign = prompt("/,+,-,* :")
calc()
function calc() {
    switch (sign) {
        case "+":
            result = number1 + number2;
            return alert(`Result:${result}`)
        case "/":
            result = number1 / number2;
            return alert(`Result:${result}`)
        case "-":
            result = number1 - number2;
            return alert(`Result:${result}`)
        case "*":
            result = number1 * number2;
            return alert(`Result:${result}`)
    }
}


