/*  Task 1: Print Each Element
    Create an array of your favorite foods and use the forEach method to print each food item to the console.

    *Expected Output:*

     Pizza
     Burger
     Sushi
     Pasta
     Tacos     */
 
const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Tacos"];
foods.forEach(a => {
    console.log(a); 
});

console.log("---------------");

/*  Task 2: Square Each Number
Create an array of numbers. Use the forEach method to square each number and print the result to the console.
 
const numbers = [1, 2, 3, 4, 5];

*Expected Output:*

1
4
9
16
25    */

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(a => {
    console.log(a*a); 
});

console.log("---------------");

/* Task 3: Concatenate Strings
Create an array of strings. Use the forEach method to concatenate the string " is awesome!" to each element and print the result.
 
const hobbies = ["Reading", "Coding", "Hiking", "Gaming"];

*Expected Output:*

Reading is awesome!
Coding is awesome!
Hiking is awesome!
Gaming is awesome!  */

const hobbies = ["Reading", "Coding", "Hiking", "Gaming"];
hobbies.forEach(a => {
    console.log(`${a} is awesome!`); 
});

console.log("---------------");

/* Task 4: Sum of Array Elements
Create an array of numbers. Use the forEach method to find the sum of all elements in the array and print the total.
 
const numbers = [10, 20, 30, 40, 50];

*Expected Output:*

Total Sum: 150    */

const number = [10, 20, 30, 40, 50];
let sum = 0
number.forEach(function(num) {
    sum+=num
});
console.log("Total Sum: ",sum);

console.log("---------------");

/* Task 5: Capitalize Each String
Create an array of lowercase words. Use the forEach method to capitalize the first letter of each word and print the result.
 
const words = ["apple", "banana", "cherry", "date"];

*Expected Output:*

Apple
Banana
Cherry
Date     */

const words = ["apple", "banana", "cherry", "date"];

words.forEach(function(word) {

  let capitalizedWord = word[0].toUpperCase();
  
  for (let i = 1; i < word.length; i++) {
    capitalizedWord += word[i];
  }

  console.log(capitalizedWord);
});


console.log("---------------");

/* Task 6: Add Index to Each Element
Create an array of random items. Use the forEach method to add the index position to each element (e.g., "Item0", "Item1", etc.) and print the result.
 
const items = ["Book", "Pen", "Laptop", "Phone"];

*Expected Output:*

Book0
Pen1
Laptop2
Phone3 */

const items = ["Book", "Pen", "Laptop", "Phone"];
items.forEach( function (index,element) {
    console.log(`${element}  ${index}` ); 
});

console.log("---------------");

/* 7: Check Even or Odd
Create an array of numbers. Use the forEach method to print whether each number is even or odd.

const numbers = [13, 22, 35, 40, 51];

*Expected Output:*

13 is Odd
22 is Even
35 is Odd
40 is Even
51 is Odd     */

const num = [13, 22, 35, 40, 51];
num.forEach(a => {
    if (a%2 == 0) {
        console.log(`${a} is Even`); 
    } else {
        console.log(`${a} is Odd`); 
    }
});

console.log("---------------");

/* Task 8: Filter Out Short Names
Create an array of names with varying lengths. Use the forEach method to print only the names that have more than 4 characters.
 
const names = ["John", "Amy", "Alexander", "Zoe", "Chris"];

*Expected Output:*

Alexander
Chris    */

const names = ["John", "Amy", "Alexander", "Zoe", "Chris"]; 
names.forEach(function (names) {
    if (names.length > 4) {
        console.log(names); 
    }
});

console.log("---------------");

/* Task 9: Count Vowels
Create an array of single letters. Use the forEach method to count the number of vowels and print the total.

javascript
const letters = ["a", "b", "e", "i", "o", "p", "u"];

*Expected Output:*

Number of vowels: 5 */

const letters = ["a", "b", "e", "i", "o", "p", "u"];
let count = 0
letters.forEach( function (letters) {
    if (letters === 'a' || letters === 'e' || letters === 'i' || letters === 'o' || letters === 'u') {
        count++
    }
});
console.log("Number of vowels:", count);

console.log("---------------"); 
