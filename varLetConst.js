console.log("JS tutorial:3 var ,let and const")

/*var is globally scoped i.e we can change at any time But they are in block scoped i.e is in the loop {} then changed 
1> When not used the  let
 
var a=10
var b="Funtya"
var c=12
{
  var b="Ganesh"
  console.log(b)
}
console.log(b)   

// 2> when used the let
var a=10 
let b="Funtya"
var c=12
{
let b="Ganesh"
  console.log(b)
}
console.log(b)   



var a=10 
let b="Funtya"
b=4 //if this var is already present then change their value
var c=12
{
let b="Ganesh"
  console.log(b)
}
console.log(b) 
*/

var a=10 
 var b="Funtya"
b=4
const boss="Funtya"
//boss =5 //const var can't be changed
var c=12
{
let b="Ganesh"
  console.log(b)
}
console.log(b) 
console.log(boss)
