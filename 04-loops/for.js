// for (let x = 10; x > 0; x-=2) {
//     console.log(x);
// }

//FIZZBUZZ QUESTION
// Print out numbers from between 1 to 20
// If the number is a multiple of 3, print FIZZ instead of the number
// If the number is a multiple of 5, print BUZZ instead of the number
// If the number is both multiples of 3 and 5, print FIZZBUZZ instead of the number

for(let i = 1; i < 21; i++) {
    
    if (i % 3 ==0) {
        console.log("FIZZ")
    } else {
        console.log(i);       
    }
 
}