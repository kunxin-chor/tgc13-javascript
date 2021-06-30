const prompt = require('prompt-sync')()

let age = parseInt(prompt("Please enter your age: "));
let citizen = prompt("Are you a citizen of Singapore? (Y/N) ");
let disqualifed = prompt("Have you been disqualifed as an elector? (Y/N) ")

if (age >= 21 && citizen == 'Y' && disqualifed == "N") {
    console.log("You are eligible for voting");
} else {
    // else part is optional
    console.log("You are not eligible for voting");
}


