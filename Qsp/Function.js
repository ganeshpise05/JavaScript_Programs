// Delclaration of Function

let firstFunct = function() {

    console.log("Function block executed !"); 
}

firstFunct()

// Parameterized Function 

let add = function(a,b){
    console.log(`Addition of ${a} and ${b} is : ${a+b}`);
}

let sub = function(c,d){
    console.log(`Substraction of ${c} and ${d} is : ${c-d}`);
}

let multi = function(e,f){
    console.log(`Multiplication of ${e} and ${f} is : ${e*f}`); 
}

let div = function(g,h){
    console.log(` Division of ${g} and ${h} is : ${g/h}`); 
}

let mod = function(i,j){
    console.log(` Modulus of ${i} and ${j} is : ${i%j}`); 
}

add(100,200) 
sub(300,200)
multi(5,10)
div(5,10)
mod(5,10)
console.log('-----------------------');

// Without declaring Funnction

function WithoutDecla (a,b){
    console.log(a,b,"function executed !");
}
WithoutDecla(10,20)

function Add (a,b){
    console.log(`Addition of ${a} and ${b} is : ${a+b}`);
}

function Sub (a,b){
    console.log(`Substarction of ${a} and ${b} is : ${a-b}`);
}

function Multi (a,b){
    console.log(`Multiplication of ${a} and ${b} is : ${a*b}`);
}

function Div (a,b){
    console.log(`Division of ${a} and ${b} is : ${a/b}`);
}

function Mod (a,b){
    console.log(`Modulus of ${a} and ${b} is : ${a%b}`);
}

Add(10,20)
Sub(20,10)
Multi(2,5)
Div(6,3)
Mod(10,5)
console.log('-----------------------');


// Arrow Function

let ArrayFunct = (a,b)=>{
    console.log(a,b,"Arrayfunction Executed !");   
}
ArrayFunct(10,29)

let Addition = (a,b) =>{
    console.log(`Addition of ${a} and ${b} is : ${a+b}`);
}

let  Substarction = (a,b) =>{
    console.log(`Substarction of ${a} and ${b} is : ${a-b}`);
}

let Multiplication = (a,b) =>{
    console.log(`Multiplication of ${a} and ${b} is : ${a*b}`);
}

let  Division = (a,b) =>{
    console.log(`Division of ${a} and ${b} is : ${a/b}`);
}

let  Modulus = (a,b) =>{
    console.log(`Modulus of ${a} and ${b} is : ${a%b}`);
}
 
Addition(100,200) 
Substarction(300,200)
Multiplication(5,10)
Division(5,10)
Modulus(5,10)
console.log('-----------------------');

// Introduction Using : Function Declaration , Parameterized Fuction , Function Without Declaration , Arrow Fuction

 let Intro1 = (id,name,phno,sal) => {
   console.log(`The employee Id: ${id} , Name: ${name} , Phone number: ${phno} , Salary: ${sal}`); 
}

Intro1(1,'Ganesh',8329988688,24500)

let funct = () => {
    console.log("Function executed !!"); 
}

funct();

// Invoke  Function : Calling Itself


((a) => { 
    console.log("Function calling itself !",a)
})
(10);

// ( function fun (a,b){
//     console.log(`The value of a is: ${a} and b is: ${b}`); 
// })
// fun();

// USer Input 

// (() => { 
//     let val = prompt("Enter your age: ")
//     console.log(val); 
// })
// ();

console.log("---------------------------------");

// Higher Order Function and Call Back Function 

// Example 1


let hof = (cbf) => {
    console.log("HOF executed !"); 
    cbf()
} 

let cbf = () => {
    console.log("CBF executed !"); 
}

hof(cbf)

console.log("--------");

// Example 2

let a = 10
let hof1 = (b,cbfParameter) => {
    cbfParameter()
}
 
let cbf1 = () => {
    console.log("CBF1 executed !"); 
}

hof1(a,cbf1)

