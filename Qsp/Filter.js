// 2/10/2024

// It can return only true value which can write on return statement.

let ages = [12,49,35,23,74,11,17,9,56,88]
let newAges = ages.filter((val,i,warray) =>{
    return val >= 18
})
console.log(newAges);
console.log(ages);

