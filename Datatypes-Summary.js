// 1:Primitive

// 7 Types: String,Number,Boolean,Null,Undefined,Symbols,BigInt
const score = 100
const scoreValue  = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 112345465653534545455654n //BigInt

// 2:Non-Primitive(Reference)

// 3 Types: Array,Objects,Function

const Actors = ["Allu Arjun","Vijay Deverakonda","Dulquer Salman","Vijay Sethupati"];

let myObject = {
    name : "Ganesh",
    age : 21,
    weight : 54.5,
    height : 5.5
}

const myFunction = function(){
    console.log("Hello JavaScript!!");
}

// When we want to know about the type of given variable then we use the below fuction/keyword.

console.log(typeof bigNumber);