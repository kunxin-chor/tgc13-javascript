const prompt = require('prompt-sync')();

// define a function
function sayHello() {
    console.log("Hello");
}

function sayChorus() {
    console.log("On old long syne my Jo,");
    console.log("On old long syne,");
    console.log("That thou canst never once reflect,");
    console.log("On old long syne.");
}

function calculateAreaOfCircle(radius) {
    return 3.14 * radius**2;
}

function calculateNetBill(bill, gstPercent, srvPercent) {
    let gst = gstPercent / 100 * bill;
    let serviceCharge = srvPercent / 100 * bill;
    let netBill= bill + gst + serviceCharge;
    return netBill;
}

// to "call a function" i.e to activate function
// sayHello();

// sayChorus();
// sayChorus();

let area = calculateAreaOfCircle(5);
console.log("Area of circle with radius 5 is", area);

let bill = parseFloat(prompt('Please enter the bill'));
let gstPercent = parseFloat(prompt("Please enter the GST percentage: "));
let servicePercent = parseFloat(prompt("Please enter the Sercvice charge perecentage:"));
let totalBill = calculateNetBill(bill, gstPercent, servicePercent);
// let totalBill = calculateNetBill(100.0, 7.0, 10.0)
console.log("The total bill is", totalBill);
