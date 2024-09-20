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
    
    


      