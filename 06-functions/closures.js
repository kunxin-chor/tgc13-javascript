let fruits = ["watermelons", "apples", "oranges", "bananas", "figs"];
fruits.sort();
console.log(fruits);

let numbers = [90, 80, 8, 9, 10, 11, 1, 2, 3 ,4, 40];
numbers.sort(function(a, b){
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(numbers);