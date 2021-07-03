let words = ['one', 'two', 'three'];

// goal: to have a new array of the same words but in uppercase
/* OLD FASHIONED WAY:
let finalWords = [];
for (let w of words) {
    finalWords.push(w.toUpperCase())
}
console.log(finalWords)
*/

let newWords = words.map(function (w) {
    return w.toUpperCase();
})
console.log(newWords);

let numbers = [99, 10, 25, 11, 23, 24, 26, 77, 13, 5, 8];
/* FILTERING */
/* Old Fashioned Method:
let evenNumbers = []; // initialise the evenNumbers to be an empty array
for (let n of numbers) {
    if (n % 2 == 0) {
        evenNumbers.push(n);
    }
}
*/

let matches = numbers.filter(function (n) {
    return n % 2 == 0;
})

let matches2 = numbers.filter(n => n % 2 == 0);
console.log(matches);

// REDUCING //
let a = [3, 4, 5, 1, 2, 39, 10];
// let sum = 0; // an accumulator
// for(let n of a) {
//     sum = sum + n;
// }
// console.log(sum);

// first argument: current element of the array
// second argument: the accumulated result
let reducer = (number, soFar) => {
    return soFar + number;
}
let total = a.reduce(reducer, 0); // second arugment is the initial result
// i.e what the result will be if the array is empty


let total2 = a.reduce((number, soFar) => soFar + number, 0)

console.log(total);

/* FIND THE MAX VALUES IN THE ARRAY */
let someNumbers = [10, 20, 300, 50, 25, 30,];
let maxNumber = someNumbers[0];
for (let n of someNumbers) {
    if (n > maxNumber) {
        maxNumber = n;
    }

    // by the end of each round of the for loop, maxNumber must be the largest
    // number so far
}

console.log(maxNumber);

let findMax = (currentNumber, soFar) => {
    if (currentNumber > soFar) {
        return currentNumber;
    } else {
        return soFar;
    }
}
let largestNumber = someNumbers.reduce(findMax, someNumbers[0]);

let largestNumber2 = someNumbers.reduce(
    (currentNumber, soFar) => currentNumber > soFar ? currentNumber : soFar, someNumbers[0]
)