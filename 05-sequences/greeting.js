const prompt = require('prompt-sync')();

let name = prompt("Please enter the name");

console.log(`Dear ${name}, 
    I can't believe that it has been more than six months since we last spoke 
blah blah
`)

console.log("--------")

console.log("Dear " + name + ",\n\tI can't believe that it has been more than six months since we spoke."
 + "You remember the song?\n\nShould auld acquaintance be forgot\nand never bought to mind?\nShould auld acquaintance be forgot\nand auld lang syne?\n\n\"Merry christmas and happy new year\"");

