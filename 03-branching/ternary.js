// binary operators
// any operators that require a left hand side and a right hand side data is known as binary
// incidentally the piece of data that an operator needs is known as 'operands'
console.log(3 + 4); // 3 and 4 are the operands --> binary

// unary operator
// means ONE
let x = 5;
console.log(x++);

let y = false;
console.log(!y);
// => console.log(!false)
// => console.log(true)

// TERNARY operator
// three pieces of data
// example check if a number is even
let toCheck = 22;
let isEven = toCheck % 2 == 0 ? true : false;

// the person can vote if they are age 21 or above
let age = 33;
console.log( age >= 21 ? "You can vote" : "You cannot vote");
// => console.log( 33 >= 21 ? "You can vote" : "You cannot vote");
// => console.log( true ? "You can vote" : "You cannot vote");
// => console.log( "You can vote");

let anotherAge = 19;
console.log( anotherAge >= 21 ? "You can vote" : "You cannot vote");
// => console.log( 19 >= 21 ? "You can vote" : "You cannot vote");
// => console.log( false ? "You can vote" : "You cannot vote");
// => console.log("You cannot vote")

if (anotherAge >= 21) {
    console.log("You can vote")
} else {
    console.log("You cannot vote")
}