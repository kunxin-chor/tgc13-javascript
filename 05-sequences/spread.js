let primes = [1,3,5,7,9,11,13];
console.log(primes);

// spread an array means literally taking each element
// of the array and seperate it with commas

console.log(...primes);
// => console.log(1,3,5,7,9,11,13)

// combine 2 arrays with spread
let a = [1,2,3,4,5];
let b = ['a', 'b', 'c', 'd', 'e'];
let c = [ ...a, ...b];
// => [ 1,2,3,4,5, ...b]
// => [ 1,2,3,4,5,'a','b','c','d','e']
console.log(c);



