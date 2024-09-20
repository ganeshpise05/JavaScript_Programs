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

// Methods of Array
console.log(arr2.indexOf(10)); // 0
console.log(arr2.at(0)); // 10
console.log(arr2.at(2)); // 30
console.log(arr2.at(10)); // Undefined

console.log("----------------------");

// Loops in Array

for(let i = 0; i < arr2.length;i++){
    console.log(arr2[i]); 
}

console.log("-----------");

let i = 0;
while (i < arr2.length) {
    console.log(arr2[i]);
    i++;
}

console.log("-----------");

let j = 0 ;
do{
    console.log(arr2[j]);
    j++; 
}
while(j < arr2.length)
 
console.log("*-----------*");

arr2.forEach( element => {
    console.log(element); 
})




























