// Primitive : 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreval = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2623758946574635989879n




// Non-Primitive (Reference)

// 3 types : Array, Objects, Functions(Methods)


const heroes = ["jack", 'rocky', "doga"];
let myObj = {
    name:"Ganesh",
    age:21,
}

const myFunction =  function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);