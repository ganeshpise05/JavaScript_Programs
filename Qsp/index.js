console.log("Hello from JavaScript file .");

/*

var a = true 
console.log(a);

// null

var sal = null ;
console.log(sal);

sal = 22278;
console.log(sal);

// undefined 

var age ;
console.log(age);


var userInput = prompt("Enter username: ")
console.log(userInput); 
console.log(typeof userInput);

// typecasting 

//let num = Number(userInput)
//console.log(num,typeof num);  

// ParseInt : to convert the string into number 
// but here in string number should be oresent at starting .

let num = parseInt (userInput);
console.log(num,typeof userInput);

*/

// Not a Number : NaN 
console.log("10"+10); //1010
console.log("10a" - "1");
console.log("10+10" - 10);

console.log("10b" * 10);
console.log("10a" * 10);

console.log(32 / "12"); //2.6666
console.log("12a" / 2);

console.log("10a" % 10);
console.log(10 % "10a");

console.log("*" / 10);
console.log("ganesh" - "ganesh");
console.log(false / 0 );

console.log(Number("10") + 10);//20
console.log(Number(undefined) + 10); //NaN
console.log(null - "ganesh"); //NaN

// Symbol:
console.log("Symbol : ");

//String
var a = "hello"
var b = "hello"
console.log(a == b); //true
console.log(a === b); //true

var c =  Symbol("hello")
var d =  Symbol("hello")
console.log(c == d); //false
console.log(c === d); //false

//Undefined
var e ;
var f ;
console.log(e == f); // truecc
console.log(e === f); //true

var g = Symbol(undefined)
var h = Symbol(undefined)
console.log(g == h); //false
console.log(g === h); //false


/* 
2. **Retrieve Object Values**  
   Given the following object representing a movie:
   ```javascript
   const movie = {
     title: 'Inception',
     director: 'Christopher Nolan',
     releaseYear: 2010,
     rating: 8.8
   };
   ```
   Retrieve all the values from this `movie` object and print them in a structured format.           */

/* 
3. **Convert Object to Key-Value Pairs**  
   You have an object that represents a book:
   ```javascript
   const book = {
     title: '1984',
     author: 'George Orwell',
     genre: 'Dystopian'
   };
   ```
   Convert the object into an array of key-value pairs and print each pair in the format: `key: value`.        */

/* 
4. **Recreate Object from Key-Value Pairs**  
   You are given an array of key-value pairs:
   ```javascript
   const keyValueArray = [
     ['name', 'Charlie'],
     ['age', 30],
     ['job', 'Engineer']
   ];
   ```
   Convert this array back into an object and print the newly created object.        */

/* 
5. **Merge Two Objects**  
   Given the following two objects:
   ```javascript
   const contactInfo = {
     phone: '123-456-7890',
     email: 'john.doe@example.com'
   };

   const address = {
     street: '123 Main St',
     city: 'Anytown',
     state: 'CA'
   };
   ```
   Merge these two objects into a single `userInfo` object and print the merged object.        */


/* 
6. **Shallow Copy with Object.assign**  
   Create a nested object representing a `person`:
   ```javascript
   const person = {
     name: 'John',
     age: 35,
     address: {
       city: 'New York',
       country: 'USA'
     }
   };
   ```
   Create a shallow copy of the `person` object. Modify the `city` property in the copied object and check the original object.        */

/* 
7. **Deep Copy using JSON Methods**  
   Given the same nested `person` object, create a deep copy of it. Modify the `address` in the deep copy and verify the original object remains unchanged.


/* 
8. **Object Literal Syntax**  
   Create an object using object literal syntax to represent a smartphone:
   Print each property of the `smartphone` object.        */

/* 
9. **Factory Function**  
   Write a factory function `createCar(make, model, year)` that returns an object representing a car. The object should have a `drive` method that logs the car's make and model. Use the factory function to create 3 different car objects and call the `drive()` method on each.        */

/* 
10. **Constructor Function**  
   Define a constructor function `User(name, email)` that initializes a user object with `name` and `email` properties. Add a method `greet()` to the constructor that logs a greeting message using the user’s name. Create multiple instances of `User` and call the `greet()` method on them.        */

/* 
11. **Creating Objects with Classes**  
   Create a class `Dog` with a constructor that takes `name` and `breed` as parameters. Add a method `bark()` that logs the dog's name followed by "is barking". Instantiate the class with 2 dogs and make them bark.        */


/* 
12. **Using Constructor Function**  
   Create a constructor function `Movie(title, director)` that initializes a movie object. Add a prototype method `getDetails()` that returns a string with the title and director. Create a few movie instances and call `getDetails()` on them.        */

/* 
13. **Assign Default Values to an Object**  
   You have an object with missing properties:
   ```javascript
   const userProfile = {
     name: 'Alice',
     age: 25
   };
   ```
   Merge the object with default values `{age: 18, city: 'Unknown'}` and print the updated object.        */

/* 
14. **Cloning an Object with Object.assign**  
   Create an object `laptop` with properties like `brand`, `model`, and `price`. Clone the `laptop` object into a new object `newLaptop`. Modify `newLaptop` and ensure the changes don’t affect the original `laptop`.        */

/* 
15. **Adding Methods to an Existing Object with Object.assign**  
   You have a `robot` object:
   ```javascript
   const robot = {
     name: 'Robo'
   };
   ```
   Add two new methods to the `robot` object: `greet()` and `performTask()`. The `greet` method should log the robot's name, and `performTask` should log a generic task message.        */


/* 
16. **Iterating through Object Properties using Object.entries**  
   Given the following object:
   ```javascript
   const movie = {
     title: 'The Matrix',
     director: 'Wachowskis',
     year: 1999
   };
   ```
   Iterate through the object and log each key-value pair in the format: `key: value`.        */

/* 
17. **Dynamic Access to Object Keys**  
   Write a function `getProperty(obj, key)` that takes an object and a key as arguments. Check if the key exists in the object. If it exists, return the value of the key; otherwise, return `"Key not found"`.        */







