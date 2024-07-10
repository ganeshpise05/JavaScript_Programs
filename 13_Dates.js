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
