const prompt = require('prompt-sync')();

// at a certain resturant
// they give a kid discount and an elderly discount of 5%
// if the customer is below 10 years old or is age 60 and above
let age = parseInt(prompt("Please enter your age: "))
let bill = parseFloat(prompt("Please enter the bill: "));
let discount = 0;
if (age < 10 || age >= 60) {
    console.log("You are eligible for discount")
    discount = bill * 0.05;
    bill = bill - discount;
} else {
    console.log("You are not eligible for discount")
}

// print out how much the person has to pay and the discount
console.log("Your discount is", discount);
console.log("Your bill is", bill);