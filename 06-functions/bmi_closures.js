const prompt = require('prompt-sync')();

function executeCalculation(f, weight, height) {
    return f(weight, height);
}

let weight = parseFloat(prompt("Enter your weight: "))
let height = parseFloat(prompt("Enter your height: "))
let mode = parseInt(prompt("Enter 1 for imperial units or 2 for SI units"));

let bmi;
if (mode == 1) {
    bmi = executeCalculation(function (w, h) {
        return w / h ** 2 * 7003;
    }, weight, height);
} else if (mode == 2) {
    bmi = executeCalculation(function (w, h) {
        return w / h ** 2;
    }, weight, height);
}

console.log("The BMI is", bmi)
