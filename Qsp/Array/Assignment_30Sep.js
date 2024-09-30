/* 

1. **Extract Object Keys**  
   You are given an object representing a student:
   ```javascript
   const student = {
     name: 'Alice',
     age: 22,
     major: 'Computer Science',
     GPA: 3.8
   };
   ```
   Extract all the keys from the `student` object and print each key along with its corresponding value.  */

   const student = {
    name: 'Alice',
    age: 22,
    major: 'Computer Science',
    GPA: 3.8
  };  

   Object.keys(student).forEach(key => {
         console.log(`${key}: ${student[key]}`);
    });

    