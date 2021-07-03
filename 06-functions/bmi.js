const prompt = require('prompt-sync')();

function executeCalculation(f, weight, height) {
    return f(weight, height);
}

// calculate BMI using kg and m
function calculateBMIUsingSI(w, h) {
    return w/h**2;
}

// weight in pounds
// h is in inches
function calculateBMIUsingImperial(w, h) {
    return w/h**2*703;
}

let weight = parseFloat(prompt("Enter your weight: "))
let height = parseFloat(prompt("Enter your height: "))
let mode = parseInt(prompt("Enter 1 for imperial units or 2 for SI units"));

let bmi;
if (mode==1) {
    bmi = executeCalculation(calculateBMIUsingImperial, weight, height);
} else if (mode==2) {
    bmi = executeCalculation(calculateBMIUsingSI, weight, height);
}

console.log("The BMI is", bmi)
