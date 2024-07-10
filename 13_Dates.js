// Date

// Date calculated in milisecond [stores date from 1970]

let myDate = new Date()
console.log(myDate); //2024-07-10T17:37:06.651Z
console.log(myDate.toString()); //Wed Jul 10 2024 23:19:55 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()) // 10/7/2024, 11:19:55 pm
console.log(myDate.toDateString()); // Wed Jul 10 2024
console.log(myDate.toISOString()); // 2024-07-10T17:49:55.679Z
console.log(myDate.toJSON()); // 2024-07-10T17:49:55.679Z
console.log(myDate.toLocaleDateString()); // 10/7/2024
console.log(myDate.toLocaleTimeString()); // 11:19:55 pm

console.log('----------------------------');
console.log(typeof myDate);

console.log('----------------------------');

// Creating constant date

let myCreatedDate = new Date(2024,5,10) // In this format jan start from 0 it's in string
console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate2 = new Date("2024-07-10") // In "YYYY-MM-DD" Date start from 1
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date(2024,5,10) //in "MM-DD-YYYY" 
console.log(myCreatedDate3.toLocaleDateString());

console.log('----------------------------');

let myTimeStamp = Date.now() // Current date print
console.log(myTimeStamp); // In mili-second
console.log(Math.floor(Date.now()/1000)); // In Second

console.log('----------------------------');

let newDate = new Date()
console.log(newDate); // Give today date
console.log(newDate.getFullYear()); // year
console.log(newDate.getMonth()+1); // Month ( January start from 0)
console.log(newDate.getDay()); // Day

console.log('----------------------------');

// to get time

newDate.toLocaleDateString('default',{
    weekday:'long'
})