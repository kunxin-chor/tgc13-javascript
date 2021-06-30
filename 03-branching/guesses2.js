const prompt = require('prompt-sync')();
let answer = Math.floor(Math.random() * 20);

let guess = parseInt(prompt("Please enter your guess: "))
if (guess == answer) {
    console.log("Yes you have guessed the number correctly")
} else if (guess > answer) {
    console.log("Too Warm")
} else {
    console.log("Too Cool")
}
console.log("The correct number is", answer);