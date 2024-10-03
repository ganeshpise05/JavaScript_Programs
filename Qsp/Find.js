/* 03/10/2024 
  Find() : used find the elements in array 
           It can return only values not array .
           It can return only one value which is greater than condition & loop terminated . */

           // In realtime use it can be used when we can add items in cart 

let arr = [10,20,30,40,50]
let findEle = arr.find((val) => {
    return val > 20
})
console.log(findEle); // 30

console.log("------------------------------------------");



