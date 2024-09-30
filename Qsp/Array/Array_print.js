// print array by using for loop

let arr = [10,20,30,40,50,60,70]
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

