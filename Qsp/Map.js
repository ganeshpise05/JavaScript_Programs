// 2/10/2024

let arr = [10,20,30,40,50,60,70,80]
let values = arr.map((val,i,wholearr) => {
    console.log(val);
    return val + 100
})
console.log(values);
console.log(arr);

console.log("--------1--------");

/*
### Task 1: Double the Numbers
Write a function that takes an array of numbers and returns a new array with each number doubled.

**Input:** `[1, 2, 3, 4, 5]`  
**Output:** `[2, 4, 6, 8, 10]`   */
let number = [1, 2, 3, 4, 5]
let newNumbers = number.map ((val) => {
    return val + val
})
console.log(newNumbers);
console.log(number);
 
console.log("--------2--------");
/*
### Task 2: Convert Temperatures
Given an array of temperatures in Celsius, use `map()` to convert them to Fahrenheit.

**Formula:** `F = (C × 9/5) + 32`  
**Input:** `[0, 10, 20, 30]`  
**Output:** `[32, 50, 68, 86]`   */
let celcius = [0, 10, 20, 30]
let Fahrenheit = celcius.map((val) => {
    return (val * 9/5) + 32
})
console.log(Fahrenheit);
console.log(celcius);
 
console.log("--------3--------");
/*
### Task 3: Add 'Hello' to Each Name
You have an array of names. Use `map()` to return a new array where each name is prefixed with "Hello".

**Input:** `["Alice", "Bob", "Charlie"]`  
**Output:** `["Hello Alice", "Hello Bob", "Hello Charlie"]`  */
let name = ["Alice", "Bob", "Charlie"]
let  newName = name.map((val) => {
     return `Hello ${val}`
})
console.log(newName);
console.log(name);


console.log("--------4--------");
/*
### Task 4: Extract Property Values
You have an array of objects representing users. Use `map()` to return an array of just the usernames.

**Input:** `[{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]`  
**Output:** `["Alice", "Bob"]`       */
let student = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
let newStudent = student.map((val) => {
    return  val.name
})
console.log(newStudent);
console.log(student);

console.log("--------5--------");
/*
### Task 5: Square the Numbers
Write a function that squares each number in an array and returns the new array using `map()`.

**Input:** `[2, 3, 4]`  
**Output:** `[4, 9, 16]`     */
let num = [2, 3, 4]
let square = num.map((val) => {
    return val ** 2
})
console.log(square);
console.log(num);


console.log("--------6--------");
/*
### Task 6: Create HTML List Items
Given an array of product names, use `map()` to return a new array of HTML `<li>` elements for each product.

**Input:** `["Apples", "Oranges", "Bananas"]`  
**Output:** `["<li>Apples</li>", "<li>Oranges</li>", "<li>Bananas</li>"]`  */
let html = ["Apples", "Oranges", "Bananas"]
let newHtml = html.map ((val) => {
    return `<li> ${val} </li>`
})
console.log(newHtml);
console.log(html);


console.log("--------7--------");
/*
### Task 7: Add Tax to Prices
You have an array of product prices. Use `map()` to return a new array where each price includes 15% tax.

**Input:** `[100, 200, 300]`  
**Output:** `[115, 230, 345]`  */
let tax = [100, 200, 300]
let newTax = tax.map((val) => {
    return  val + val * 15 /100
})
console.log(newTax);
console.log(tax);


 
console.log("--------8--------");
/*
### Task 8: Convert Strings to Numbers
You have an array of strings representing numbers. Use `map()` to convert them into actual numbers.

**Input:** `["1", "2", "3"]`  
**Output:** `[1, 2, 3]`     */
let str = ["1", "2", "3"]
let newStr = str.map((val) => {
    //return Number(val)
    return parseInt(val)
})
console.log(newStr);
console.log(str);

