const prompt = require('prompt-sync')();

// wrong way to ask for two numbers and to add them again
let num1 = parseInt(prompt("Please enter the first number: "))
let num2 = parseInt(prompt("Please enter the second time: "))
// when we add two strings together, they are joined together
// to form a new string (concatenation)
let sum = num1 + num2;
console.log(sum)