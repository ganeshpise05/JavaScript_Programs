// Extract all the keys from the `student` object and print each key along with its corresponding value. 

let student = {
    name : 'Alice',
    age : 22,
    major : 'CSE',
    GPA : 3.8
}

let keys = Object.keys(student)
console.log(keys)
keys.forEach((val) => {
    console.log(val + ':' + student[val])
})

// Retrieve all the values from this `movie` object and print them in a structured format.
// let movie = {
//     title : 'inception',
//     director : 'Thomas',
//     releaseYear : 2010,

// }

// Convert the object into an array of key-value pairs and print each pair in the format: `key: value`. 
// let book = {
//     title : '1984',
//     Author : 'Jorge Aura',
//     genre : 'Bhojpuri'
// }

// let 
