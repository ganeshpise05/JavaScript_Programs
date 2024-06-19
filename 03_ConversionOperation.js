let score = 33

console.log(typeof score);
console.log(typeof score);

let num = Number(score)
console.log(typeof num);
console.log(num);
console.log('-----------------');

//"33" => 33
//"33abc" =>NaN:not an number
//true=>1 & false=>0

let loggedin = 0

let booleanlog = Boolean(loggedin)
console.log(booleanlog);
console.log('-----------------');

//1 => true , 0 =>false
//"funtya" => true
//"" => false

let anynum = 21.3

let stringnum = String(anynum)
console.log(stringnum);
console.log(typeof stringnum);
console.log('---------*****--------');

//************************ Operations *********************/

let val = 3;
let negval = -val
console.log(negval);

/* console.log(2+2);
console.log(5-2);
console.log(2*3);
console.log(2**4);
console.log(2/3);
console.log(2%3); */

let str1 = 'Ganesh'
let str2 = ' Pise'

let str3=str1+str2
console.log(str3);

console.log('1'+2);
console.log(1+'2');
console.log('1'+2+2);
console.log(1+2+'2');

console.log((3+4)* 5 % 3);

//tricky conversion

console.log(true);
console.log(+true);
console.log(-true);
console.log(+"");

let gamecounter =100
gamecounter++;
console.log(gamecounter);