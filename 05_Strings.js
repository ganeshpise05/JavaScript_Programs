
const name = "Ganesh"
const repoCount = 15

//console.log(name + repoCount + " Value");

// Use backticks``  for variable inject use ${}

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Funtya')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName);
console.log(gameName.length);
 console.log(gameName.toUpperCase);
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));
 console.log("--------------------------------");

 const collageName = new String('Fabtech-FTC')
 
 const newString = collageName.substring(0,7)
 console.log(newString);

 const newString2 = collageName.slice(-5,4)
 console.log(newString2);
 

 console.log("--------------------------------");

const newString3 = " Johnny-Depp "
console.log(newString3);
console.log(newString3.trim());

console.log("--------------------------------");

const url = "https://ganeshpise.com/ganesh%33pise"

console.log(url.replace('%33','-'));//replacing characcters
console.log(url.includes('funtya'));//checking this present or not
