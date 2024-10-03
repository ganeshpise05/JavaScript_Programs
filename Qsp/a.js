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
