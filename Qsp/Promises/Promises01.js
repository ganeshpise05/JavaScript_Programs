/*

// Example 1 

let p1 = new Promise((resolve,reject) => {
    let a = 10 ;
    if (a == 10) resolve(); 
    else  reject();
});

p1.then(() => {console.log("True : a == 10")})
p1.catch(() => {console.log("False : a != 10")})   

console.log("-----------------------");

// Example 2 
console.log("First");
let p2 = new Promise((resolve,reject) => {
   let a = 10 + 20
   reject("Something went wrong !!")
});

p2.then((val) => {
    console.log("then Block : "+ val); 
});

p2.catch((err) => {
    console.log("catch Block : "+ err);
});
console.log("Last");
 
*/

// Example 3

console.log("First");

let p = fetch("https://api.github.com/users"); 
 console.log(p);
 p.then((val) => {
    console.log(val);
    let data = val.json();
    return data ;
 }).then((val2) => {console.log(val2);
 })
 
console.log("Last");










