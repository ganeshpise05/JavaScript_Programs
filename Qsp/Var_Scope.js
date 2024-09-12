// Global Scope variable

var a = 10
let b = 20
const c = 30

if (true) {
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("-------");


// Local Scope variable 

if (true) {
    var d = 40
}
con
sole.log(d);

console.log("-----------");

// local var declared by using let & const

/*
if (true) {
    let e = 50
    const f = 60
}

console.log(e); // error
console.log(f); // error
*/
