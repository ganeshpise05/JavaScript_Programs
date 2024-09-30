console.log("Hello from JavaScript file .");

/*

var a = true 
console.log(a);

// null

var sal = null ;
console.log(sal);

sal = 22278;
console.log(sal);

// undefined 

var age ;
console.log(age);


var userInput = prompt("Enter username: ")
console.log(userInput); 
console.log(typeof userInput);

// typecasting 

//let num = Number(userInput)
//console.log(num,typeof num);  

// ParseInt : to convert the string into number 
// but here in string number should be oresent at starting .

let num = parseInt (userInput);
console.log(num,typeof userInput);

*/

// Not a Number : NaN 
console.log("10"+10); //1010
console.log("10a" - "1");
console.log("10+10" - 10);

console.log("10b" * 10);
console.log("10a" * 10);

console.log(32 / "12"); //2.6666
console.log("12a" / 2);

console.log("10a" % 10);
console.log(10 % "10a");

console.log("*" / 10);
console.log("ganesh" - "ganesh");
console.log(false / 0 );

console.log(Number("10") + 10);//20
console.log(Number(undefined) + 10); //NaN
console.log(null - "ganesh"); //NaN

// Symbol:
console.log("Symbol : ");

//String
var a = "hello"
var b = "hello"
console.log(a == b); //true
console.log(a === b); //true

var c =  Symbol("hello")
var d =  Symbol("hello")
console.log(c == d); //false
console.log(c === d); //false

//Undefined
var e ;
var f ;
console.log(e == f); // truecc
console.log(e === f); //true

var g = Symbol(undefined)
var h = Symbol(undefined)
console.log(g == h); //false
console.log(g === h); //false


 
