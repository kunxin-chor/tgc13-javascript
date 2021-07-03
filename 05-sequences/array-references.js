// primitve data types:
let a = 3;
let b = a;
// => b = 3;
b = b + 3;
// => b = 3 + 3
// => b = 6
console.log(a);  // => 3

function addDurian(ar) {
    ar.push("durian");
}

let fruits = ["apples", "bananas", "oranges"];
let another = [...fruits];
another[0] = -99;
console.log(fruits);

addDurian(fruits);
console.log(fruits)