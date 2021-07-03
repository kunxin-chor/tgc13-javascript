const prompt = require('prompt-sync')();

let firstName = prompt("Enter the first name of the customer: ");
let lastName = prompt("Enter the last name of the customer: ");
let bill = prompt("Enter the bill amount: ")

let letter = "Dear " + firstName + " " + lastName + ",\n\tIt has come to our attention that your bill of " + bill + " is overdue."

let letter2 = `
Dear ${firstName} ${lastName},
    It has come to our attention that your bill of $${bill} is overdue. If you do not
settle the bill by the end of the month we will charge you a penalty fee of 10%, which
will be ${0.1 * bill}.

    Regards,
    Customer support
`
console.log(letter2)