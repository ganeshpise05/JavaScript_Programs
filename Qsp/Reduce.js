 //03/10/2024 
 // Reduce() method

// using forEach loop
let arr = [10,20,30,40,50]
let sum = 0
arr.forEach ((val,i) => {
    sum+=val
})
console.log(sum); //150

//Using map() method
let addition = arr.map((val,i) => {
    return val+=val
})
console.log(addition); // [ 20, 40, 60, 80, 100 ]

// Using filter() method
let filterAddi = arr.filter ((val,i) => {
    return val+=val
})
console.log(filterAddi); //[ 10, 20, 30, 40, 50 ]

// Using Reduce() method
let reduceAddi = arr.reduce((acc,val,i,wholeArr) => {
    return (acc += val)
})
console.log(reduceAddi); // 150

/* 
   Reduce can not return array it can return value
   map & filter cal return the array
   we can use for to store value
   we can store two arguments in array
*/
