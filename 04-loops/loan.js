// Say Peter owns the bank 10,000
// and the monthly interest rate is 2%
// If Peter pays back $500 per month
// How long does it take for him to repay the entire loan, in months
let loan = 10000;
let repayment = 500;
let interestRate = 0.02;
let numberOfMonth = 0;

while (loan > 0) {
    // loan = loan + (loan * interestRate);
    loan += loan * interestRate;
    // loan = loan - repayment;
    loan -= repayment;
    numberOfMonth++; // increase number of month by 1
  
}

console.log("Number of months to repay loan = ", numberOfMonth);