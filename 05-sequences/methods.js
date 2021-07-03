// CASE CONVERSION
let shouting = "SHE SELLS SEASHELLS";
// all string functions return a new COPY of the original string that has been changed 
console.log("shouting.toLowerCase() => ", shouting.toLowerCase());
// => console.log("she sells seashells");

// the original string is not changed
console.log("shouting = ", shouting);

// convert to uppercase
console.log("'the quick brown fox'.toUpperCase = ", "the quick brown fox".toUpperCase())

let words = "apples bananas oranges";
console.log("words.toUpperCase() => ", words.toUpperCase());

// TRIM
console.log("' abc '.trim() => ", " abc ".trim());

// CHECK IF A CERTAIN SUBSTRING EXISTS IN A STRING
let sentence = "It was a dark and stormy night. A shot rang out!";

// check if the string contains the word (i.e substring) "night"
console.log("sentence.includes('night') => ", sentence.includes('night'));
console.log("sentence.includes('day') => ", sentence.includes('day'));

// get the index of the substring 'night' in the string 'It was a dark and stormy night.'
console.log(`"abcde".indexOf('b') =>`, "abcde".indexOf('b'))
let intro = "It was a dark and stormy night";
console.log("Index of night in 'it was a dark and stormy night' =>", intro.indexOf('night') );
console.log("Index of dark in 'it was a dark and stormy night' =>", intro.indexOf('dark') );

// convert a string into an array
let fruits = "apples,bananas,oranges,figs";
let a = fruits.split(",");
console.log(a);

let wordList = "mary has a little lamb whose fleece is white as snow".split(" ");
console.log(wordList);