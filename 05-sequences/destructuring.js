let months = ["Jan", "Feb", "March", "Apr", "May", "June"];
let m1 = months[0];
let m2 = months[1];
let m3 = months[2];
let m4 = months[3];
let m5 = months[4];
let m6 = months[5];

console.log(m1, m2, m3, m4, m5, m6);

// Array destructuring basically is a short form for extracting each element of an array into a variable

let [a, b, c, d, e, f, g] = months;
console.log(a, b, c, d, e, f, g);

// let months = ["Jan", "Feb", "March", "Apr", "May", "June"];
let [month1, month2] = months;
console.log(month1,month2)