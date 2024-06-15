const student = {
    fullName :"Ganesh Pise",
    age:20,
    cgpa:8.05,
    isPass:true,
};  

console.log(student["age"]);
console.log(student["cgpa"]);
console.log(student.isPass);
console.log(student.fullName);

//change th evalue in object of student we can uses below tag.
student['age']= student['age']+1;
console.log(student["age"]);

student["fullName"] = "Ajay Pise";
console.log(student["fullName"]);

//from above example we can see that we can change constant object values 
//but we can't change constant var values  below example 
//const name = "Rayesh";
//name = "Rocky";