// include prompt-sync
const prompt = require('prompt-sync')();
let weight = prompt("Please enter your weight: ");
let height = prompt("Please enter your height:");
// if we take a string and divide it by a string
// JS will autoconvert the value to a float
let bmi = weight / height**2;
console.log("Your BMI is:", bmi);