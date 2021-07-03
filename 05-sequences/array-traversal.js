// array traversal - we want to process each element in an array one by one
// i.e iterating through an array
let fruits = ['apples', 'bananas', 'oranges'];
for (let f of fruits) {
    console.log(f);
}

/// long winded way and also old-fashioned
for(let i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
}