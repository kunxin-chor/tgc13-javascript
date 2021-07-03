function foobar(x,y) {
    return x + y;
}

// first "transformation"
let f = (x,y) => {
    return x + y;
}

// if the function has only one line and that line is to return something,
// we can omit the { ... } and the return
let f2 = (x,y) => x + y;

function findExtension(filename) {
    let lastIndex = filename.indexOf(".");
    let ext = filename.slice(lastIndex+1);
    return ext;
}

let findExt = (filename) => filename.slice(filename.indexOf(".")+1)

let findExt2 = (filename) => {
    let lastIndex = filename.indexOf(".");
    let ext = filename.slice(lastIndex+1);
    return ext;
}
// if you only have one argument, you can omit the (...) around the arguments

let findExt3 = filename => {
    let lastIndex = filename.indexOf(".");
    let ext = filename.slice(lastIndex+1);
    return ext;
}

let areaOfCircle = r => 3.14*r**2;
/*
    function areaOfCircle(r) {
        return 3.14 * r**2
    }
*/

console.log("areaOfCircle(3.5) => ", areaOfCircle(3.5));