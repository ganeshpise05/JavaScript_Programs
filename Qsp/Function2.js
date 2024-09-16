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


