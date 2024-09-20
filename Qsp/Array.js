// 19-09-2024

// Arrays

let arr = ["Ganesh",21,25000,null,undefined, ()=>{ console.log("from inner function of Array!")} , {name: "Abhijit"} , ["item1" , "item2"]]
console.log(arr);
console.log(arr[arr.length-1]);

console.log("----------------------");

// CURD operation on Array

// 1.Create
let arr2 = [10,20,30,40,50]

// 2.Read
console.log(arr2); // 10,20,30,40,50

// 3.Update
arr2.push(60)
console.log(arr2); // 10,20,30,40,50,60

// 4.Remove/Delete last element
arr2.pop()
console.log(arr2); // 10,20,30,40,50

// 5.Add element first index of array
arr2.unshift(200)
console.log(arr2); // 200, 10, 20, 30, 40, 50

// 6.Remove first element of arraay
arr2.shift()
console.log(arr2); // 10, 20, 30, 40, 50








 