// print array by using for loop

let arr = [10,90,30,80,40,50,100,60,70]

for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]); 
}

console.log("--------------");

// print array by using array function & forEach loop
let funct = (val) => {
     console.log(val); 
}
arr.forEach(funct)
console.log("--------");

//OR
arr.forEach((val)=>{console.log(val)})   // forEach loop is a HOF bcz it gives another funct as argument.
console.log("--------------");

arr.forEach((val,index,wholeArry)=>{

     console.log(val); 
     console.log(index);
     console.log(wholeArry);

     //console.log(val,index,wholeArry)   
}) 
console.log("--------------");

// sorting array by using sort() method by ascending & decending order.
console.log(arr.sort());  // it can sort only 2 digit number.
console.log(arr.sort((a,b)=>{
     return a - b  // ascending order print 
 }));

 console.log(arr.sort((a,b)=>{
     return b - a    // decending order print 
 }));

 console.log("-------------------");
 // Using sort method as CBF
 let sortArray = arr.sort((a,b) => {
     return a-b;
 })
 console.log(sortArray);
 console.log(arr);
 
 console.log("------------------'");
 // Using forEach loop
 let newArr = arr.forEach((val) => {
     console.log(val+100);  
 })
 console.log(newArr); // return undefined
 console.log(arr);
 
 
 
 