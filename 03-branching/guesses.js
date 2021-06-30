const prompt = require('prompt-sync')();
let answer = Math.floor(Math.random() * 20);

let guess = parseInt(prompt("Please enter your guess: "))
if (guess == answer) {
    console.log("Yes you have guessed the number correctly")
} 

// if guess is lower than the answer, then we print "too cool"
// if guess is higher than the answer, thew we print "too warm"
if (guess > answer) {
    console.log("Too warm");
}

if (guess < answer) {
    console.log("Too Cool");
}

console.log("The correct number is", answer);