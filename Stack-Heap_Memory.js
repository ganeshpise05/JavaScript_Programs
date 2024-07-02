// Stack memory : Primitive Datatypes (String,Number,Boolean,Null,Undefined,Symbols,BigInt)
console.log("It gives copy of given object to be created.");
console.log("");

let myInstagramId = "call_me_funtya"

let anotherId = myInstagramId
anotherId = "its_funtya_photography"

console.log(myInstagramId);
console.log(anotherId);

console.log(" ");
// Heap Memory : Non-Primitive Datatypes (Array,Objects,Function)
console.log("It gives reference of object i.e Original variable value changed.");

let userOne = {
    email : "ganeshpise2205@gmail.com",
    mobileNo : 8329988688,
    upi : "funtya@ybl"
}

let userTwo = userOne

userTwo.email = "piseganesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
