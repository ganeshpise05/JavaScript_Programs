// 19-09-2024

console.log("creating an Object.");

// Below object is created by using the object literal/keyword.
//  1. Object Literal Way 
//   let obj = {
//      key : "value"
//   }

let obj = {
    name : "Ganesh",
    age : 21,
    mobileNo : 8329988688,
    email : "piseganesh2205@gmail.com"
}

console.log(obj.name); // Ganesh
console.log(obj); // Whole object print

// Performing CURD operation on Object

console.log("----------------------");

// 2. Using new keyword & Object class
    //   let obj = new Object({name:"Funtya" , Age : 21}) 
    //   console.log(obj);
      
console.log("----------------------");

// 3. Using classes in Js
      class createObject {
        constructor (name) {
            console.log(name);
            this.name = name
        }
      }

      let obj1 = new createObject("Ganesh")
      console.log(obj1);

console.log("----------------------");

// 4.. Using factory Function
    let createFunct = (name , add ) => {
        let student = {
            name : name,
            add : add
        }
        return student
    } 
    
    let student = createFunct("Ganesh","Pune")
    let student1 = createFunct("Abhijit","Bangalore")
    let student2 = createFunct("Sushant","Kuchekarwdi") 
    let student3 = createFunct("Sham","Malshiras")
    console.log(student,student1,student2,student3);

console.log("------------------------");
    
// Accesing variable declared inside object 

// let value  = "10000"

// let obj2 = {
//     key : value
// }
// console.log(obj2[key]);

let obj3 = {
    name : "Funtya",
    mobile : 8329988688,
    email : "piseganesh2205@gmail.com"
}

console.log("name" in obj3); // true
console.log("sal" in obj3); // false 

// Inside the object we can create object and console 

let obj4 = {
    name : "Funtya",
    mobile : 8329988688,
    email : "piseganesh2205@gmail.com",

    funct : () =>{
      console.log(obj4.name);   // in javascript we can't use this keyword inside Arrowfunction in normal function it used.
    } ,

    funct2 : function () {
        console.log(this.mobile); 
    }
}
obj4.funct();
obj4.funct2();
    


      