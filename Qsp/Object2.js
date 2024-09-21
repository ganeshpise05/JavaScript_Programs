// 21-09-2024

let obj = {
    name : "Ganesh",
    phone : 8329988688,
    age : 22,
    mail : "piseganesh2205@gamil.com",
    add : "Pune",

    alarm : () =>{
        console.log("Wake up !!!"); 
    }, 
}

console.log(obj.alarm); // Function alarm 
console.log(obj.alarm()); //Wake up !!! and undefined : we can't write fuction in console. 
console.log(obj.name); // Ganesh
obj.age = 24 // Assign new value to age 
console.log(obj);

console.log("-----------------");


class CreateObj {
    constructor (name) {
        this.name = name
    }
}
let obj1 = new CreateObj ("Sushant")
console.log(obj1);

console.log("-----------------");

// Using factory function

let CreateObj2 =  (name) =>{
    let obj = {
      username : name,
    };
   // return obj ;
    console.log(obj.username); 
}  
CreateObj2("Rayesh") 

// Create object at once & insert multiple values or data of student


let object = (id,name,quali,yop,CGPA,contact,email) => {
    let obj4 = {
        id,
        name,
        quali,
        yop,
        CGPA,
        contact,
        email,
    };
    return obj4;
};

let student1 = object (
    1,"Ganesh","B.Tech",2024,8.05,8329988688,"piseganesh2205@gmail.com"
)

let student2 = object (
    2,"Sham","BCS",2023,7.05,9766662892,"shampise07@gmail.com"
)

let student3 = object (
    3,"Saniya","B.Tech",2024,6.05,7219711611,"saniya@gmail.com"
)

console.log(student1);
console.log(student2);
console.log(student3);


// We can pass object inside object 
// we can pass function inside object

// Convert Object into array by using Object.entries() method

let Obj = {
    name : "Abhijit",
    add : "Pune",

    age  : 22,
    gender : "Male",
    alarm : () => {
        console.log("Wake up !!"); 
    },
};

// Convert Object into array by using Object.entries() method
let arr = Object.entries(Obj)
console.log(arr);

// Convert array into Object by using Object.fromEntries() method.
let arr2 = Object.fromEntries(arr)
console.log(arr2);

/*  Normal array not converted into Object by using Object.fromEntries() method.
let a = [1,2,3,4,5,6,7,8]
let  a1 =  Object.fromEntries(a)
console.log(a1);  */

console.log("*************************");

// merge two objects by using method called is Object.assign(1,2) 
// 1-target object which stores another object
// 2-source object which want to merge

let student = {
   Yop : 2023,
   CGPA : 7.8
}

let name = {
    id : 1,
    name : "Akshay",
    Gender : "Male"
}

let address = {
    city : "Pune",
    State : "Maharashtra",
    HouseNo : 715,
    pin : 413307
}

let mail = {
    email : "akshay76@gmail.com"
}

Object.assign(student,name)
Object.assign(student,address)
Object.assign(student,mail)
console.log(student);



































