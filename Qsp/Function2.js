// 16-09-2024

// Addition
let add = (a,b) => {
    return a+b;
};
console.log(add(100)); //NaN


let add2 = (a,b=0) => {
    return a+b;
};
console.log(add2(100)); // b=0 default parameter

console.log("-------------------");


// Find out the vowels in given string
// In js String have index.
let str = "hello hunny bunny you are my pumkin"  
let findVowels = (val) =>{
    let temp = ''
    for(let i=0;i<=val.length-1;i++){
        if (val[i]=='a' || val[i]=='e' || val[i]=='i' || val[i]=='o' || val[i]=='u') {
              temp += val[i] 
        }
    }
    console.log(temp); 
}
findVowels(str)

/*
//  Create table from user input
let num = prompt("Enter number")
let tableFunct = (number) =>{
    console.log(number);
    for (let i = 2; i <= 10 ; i++){
        // console.log(`${number} * ${i} = ${number*i}`); 
        console.log(`${number*i}`); 
    }
}
tableFunct(num)


// Find length of String by user input.
let str2 = prompt("Enter String: ")
let findLength = (val) =>{
    // let length = 0
    let i = 0
    while (val[i] != undefined) {
    //   length++
      i++;  
    }
  console.log(`Length of given string is: ${i}`);
}
findLength(str2)

*/

console.log("--------------");

console.log("10" + "10"); // 1010
console.log("10" == 10); // true
console.log(10 - "10"); // 0
console.log(10 / 0); // Infinity
console.log(10 / "0"); // Infinity
console.log("10"+ + "10"); // 1010
console.log("a" + 10); 

// in + operator it first perform the operation concatination then after addition.



