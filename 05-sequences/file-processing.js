const prompt = require('prompt-sync')();

let filename = prompt("Enter filename: ")

// solution 1:
// let lastIndex = filename.length - 1;
// let extension = filename.slice(lastIndex-2);
// console.log(extension);

// alternate solution
// let extension = filename.slice(-3)

let dotIndex = filename.indexOf('.');
let extension = filename.slice(dotIndex+1)

if (extension == 'png' || extension == 'jpg') {
    console.log("The file is an image file")
}