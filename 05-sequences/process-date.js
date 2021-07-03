const prompt = require('prompt-sync')();

let date = prompt("Please enter the date in DD-MM-YYYY format: ");
let day = date.slice(0, 2);
let month = date.slice(3, 5);
let year = date.slice(6)
console.log(day);
console.log(month);
console.log(year);

let monthIsValid = false;
if (parseInt(month) >= 1 && parseInt(month) <= 12) {
    monthIsValid = true;
}

if (monthIsValid) {
    console.log("The month is valid")
} else {
    console.log("The month is invalid")
}