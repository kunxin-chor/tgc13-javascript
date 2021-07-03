// are a sequence of characters between quotes
let sentence = "she sells seashells at the seashore";
let words = 'the quick brown fox jumps over the lazy dog'

// do not mix the starting quotes and the ending quotes
// let wontwork = 'hello"

// it's ok to embed to a single quote character in the double quote string
let story = "She said she didn't sell any seashells at the seashore."

// it's ok to embed a double quote character in a single quote string
let story2 = 'She said "She sold some seashells"';

let story3 = 'She said,"I didn\'t sell any seashells at the seashore."'
let story4 = "She said, \"I didn't sell any seashells at the seashore.\""

console.log(story3);
console.log(story4);

let beginning = "It was the best of time,\nit was worst of times";
console.log(beginning)

console.log("Dear sir\n\tIt has come to our attention that you haven't paid your bill.");

console.log("c:\\test");

// backtick string
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque 
bibendum libero vel convallis tincidunt. Vivamus in massa felis. 
In maximus faucibus justo sed aliquet. Pellentesque laoreet gravida turpis, sed luctus 
tellus scelerisque sit amet. Etiam sit amet massa eget risus suscipit vulputate accumsan 
sit amet mi. Vivamus vel consectetur augue, porttitor bibendum lectus. 
Proin imperdiet nisi a dolor gravida, non consectetur sapien aliquam. Fusce scelerisque 

     sapien eu mauris maximus vehicula.In mollis dapibus erat, et consectetur magna ultrices at.
 Maecenas orci nibh, lacinia sit amet varius pretium, varius sit amet elit.
Donec tempus aliquet dolor, at faucibus lectus cursus vitae. Nulla varius laoreet ultrices. 
Nulla pulvinar mattis vehicula. Sed quis libero malesuada, interdum dui vitae, sagittis libero.
 Suspendisse venenatis pharetra mi id molestie. Sed id mattis nunc. 
 Nullam ultricies quam id mi finibus, ac rhoncus nulla vehicula.`

 console.log(lorem);