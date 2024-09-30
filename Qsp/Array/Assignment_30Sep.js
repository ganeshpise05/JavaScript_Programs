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

    console.log("---------------------------");
    
/* 
2. **Retrieve Object Values**  
   Given the following object representing a movie:
   ```javascript
   const movie = {
     title: 'Inception',
     director: 'Christopher Nolan',
     releaseYear: 2010,
     rating: 8.8
   };
   ```
   Retrieve all the values from this `movie` object and print them in a structured format.           */

   const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseYear: 2010,
    rating: 8.8
  }; 

  Object.values(movie).forEach(value => {
    console.log(value);
  });

  console.log("---------------------------");

  /* 
3. **Convert Object to Key-Value Pairs**  
   You have an object that represents a book:
   ```javascript
   const book = {
     title: '1984',
     author: 'George Orwell',
     genre: 'Dystopian'
   };
   ```
   Convert the object into an array of key-value pairs and print each pair in the format: `key: value`.        */

   const book = {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian'
  };
   
  Object.entries(book).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  console.log("---------------------------");

/* 
4. **Recreate Object from Key-Value Pairs**  
   You are given an array of key-value pairs:
   ```javascript
   const keyValueArray = [
     ['name', 'Charlie'],
     ['age', 30],
     ['job', 'Engineer']
   ];
   ```
   Convert this array back into an object and print the newly created object.        */

   const keyValueArray = [
    ['name', 'Charlie'],
    ['age', 30],
    ['job', 'Engineer']
  ];
   
  const newObject = Object.fromEntries(keyValueArray);
   
  console.log(newObject);
  
  console.log("---------------------------");

  /* 
5. **Merge Two Objects**  
   Given the following two objects:
   ```javascript
   const contactInfo = {
     phone: '123-456-7890',
     email: 'john.doe@example.com'
   };

   const address = {
     street: '123 Main St',
     city: 'Anytown',
     state: 'CA'
   };
   ```
   Merge these two objects into a single `userInfo` object and print the merged object.        */

   const contactInfo = {
    phone: '123-456-7890',
    email: 'john.doe@example.com'
  };
  
  const address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  };
   
  const userInfo = Object.assign({}, contactInfo, address);
  console.log(userInfo);
  
  console.log("---------------------------");

  /* 
6. **Shallow Copy with Object.assign**  
   Create a nested object representing a `person`:
   ```javascript
   const person = {
     name: 'John',
     age: 35,
     address: {
       city: 'New York',
       country: 'USA'
     }
   };
   ```
   Create a shallow copy of the `person` object. Modify the `city` property in the copied object and check the original object.        */

   const person = {
    name: 'John',
    age: 35,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Creating a shallow copy using Object.assign
  const personCopy = Object.assign({}, person);
  
  // Modifying the city property in the copied object
  personCopy.address.city = 'Los Angeles';
  
  // Checking the original object
  console.log('Copied Object:', personCopy);
  console.log('Original Object:', person);
  
  console.log("---------------------------");

  /* 
7. **Deep Copy using JSON Methods**  
   Given the same nested `person` object, create a deep copy of it. Modify the `address` in the deep copy and verify the original object remains unchanged. */

 
// Creating a deep copy using JSON methods
const deepCopyPerson = JSON.parse(JSON.stringify(person));

// Modifying the city property in the deep copy
deepCopyPerson.address.city = 'Los Angeles';

// Checking the original and deep copied objects
console.log('Deep Copied Object:', deepCopyPerson);
console.log('Original Object:', person);

  console.log("---------------------------");

  /* 
8. **Object Literal Syntax**  
   Create an object using object literal syntax to represent a smartphone:
   Print each property of the `smartphone` object.        */

   // Creating an object using object literal syntax
const smartphone = {
    brand: 'Apple',
    model: 'iPhone 14',
    price: 999,
    features: {
      screenSize: '6.1 inches',
      battery: '3095 mAh',
      camera: '12 MP'
    }
  };
  
  // Printing each property of the smartphone object
  for (let key in smartphone) {
    // Check if the property is another object
    if (typeof smartphone[key] === 'object') {
      console.log(`${key}:`);
      for (let feature in smartphone[key]) {
        console.log(`  ${feature}: ${smartphone[key][feature]}`);
      }
    } else {
      console.log(`${key}: ${smartphone[key]}`);
    }
  }
  
  console.log("---------------------------");

  /* 
9. **Factory Function**  
   Write a factory function `createCar(make, model, year)` that returns an object representing a car. The object should have a `drive` method that logs the car's make and model. Use the factory function to create 3 different car objects and call the `drive()` method on each.        */

   // Creating an object using object literal syntax
  
  // Printing each property of the smartphone object
  for (let key in smartphone) {
    // Check if the property is another object
    if (typeof smartphone[key] === 'object') {
      console.log(`${key}:`);
      for (let feature in smartphone[key]) {
        console.log(`  ${feature}: ${smartphone[key][feature]}`);
      }
    } else {
      console.log(`${key}: ${smartphone[key]}`);
    }
  }
  
  console.log("---------------------------");

  /* 
10. **Constructor Function**  
   Define a constructor function `User(name, email)` that initializes a user object with `name` and `email` properties. Add a method `greet()` to the constructor that logs a greeting message using the user’s name. Create multiple instances of `User` and call the `greet()` method on them.        */

   // Constructor function for User
function User(name, email) {
    this.name = name;
    this.email = email;
  
    // Method to greet using the user's name
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}!`);
    };
  }
  
  // Creating instances of User
  const user1 = new User('Alice', 'alice@example.com');
  const user2 = new User('Bob', 'bob@example.com');
  
  // Calling the greet method on each instance
  user1.greet();  // Output: Hello, my name is Alice!
  user2.greet();  // Output: Hello, my name is Bob!
  
  console.log("---------------------------");
  
/* 
11. **Creating Objects with Classes**  
   Create a class `Dog` with a constructor that takes `name` and `breed` as parameters. Add a method `bark()` that logs the dog's name followed by "is barking". Instantiate the class with 2 dogs and make them bark.        */

   // Defining the Dog class
class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
  
    // Method to make the dog bark
    bark() {
      console.log(`${this.name} is barking!`);
    }
  }
  
  // Creating instances of the Dog class
  const dog1 = new Dog('Rex', 'German Shepherd');
  const dog2 = new Dog('Buddy', 'Golden Retriever');
  
  // Making the dogs bark
  dog1.bark();  // Output: Rex is barking!
  dog2.bark();  // Output: Buddy is barking!
  
  console.log("---------------------------");

  /* 
12. **Using Constructor Function**  
   Create a constructor function `Movie(title, director)` that initializes a movie object. Add a prototype method `getDetails()` that returns a string with the title and director. Create a few movie instances and call `getDetails()` on them.        */

   // Constructor function for Movie
function Movie(title, director) {
    this.title = title;
    this.director = director;
}

// Adding a prototype method to get movie details
Movie.prototype.getDetails = function() {
    return `Title: ${this.title}, Director: ${this.director}`;
};

// Creating instances of Movie
const movie1 = new Movie("Inception", "Christopher Nolan");
const movie2 = new Movie("The Godfather", "Francis Ford Coppola");
const movie3 = new Movie("Pulp Fiction", "Quentin Tarantino");

// Calling getDetails() on the movie instances
console.log(movie1.getDetails()); // Output: Title: Inception, Director: Christopher Nolan
console.log(movie2.getDetails()); // Output: Title: The Godfather, Director: Francis Ford Coppola
console.log(movie3.getDetails()); // Output: Title: Pulp Fiction, Director: Quentin Tarantino

  console.log("---------------------------");

  
/* 
13. **Assign Default Values to an Object**  
   You have an object with missing properties:
   ```javascript
   const userProfile = {
     name: 'Alice',
     age: 25
   };
   ```
   Merge the object with default values `{age: 18, city: 'Unknown'}` and print the updated object.        */

   const userProfile = {
    name: 'Alice',
    age: 25
};

const defaultValues = {
    age: 18,
    city: 'Unknown'
};

// Merging userProfile with defaultValues
const updatedProfile = Object.assign({}, defaultValues, userProfile);

console.log(updatedProfile); // Output: { age: 25, city: 'Unknown', name: 'Alice' }

  console.log("---------------------------");

  /* 
14. **Cloning an Object with Object.assign**  
   Create an object `laptop` with properties like `brand`, `model`, and `price`. Clone the `laptop` object into a new object `newLaptop`. Modify `newLaptop` and ensure the changes don’t affect the original `laptop`.        */

   // Original laptop object
const laptop = {
    brand: 'Dell',
    model: 'XPS 13',
    price: 999
};

// Cloning the laptop object
const newLaptop = Object.assign({}, laptop);

// Modifying the new laptop object
newLaptop.model = 'XPS 15'; // Change the model
newLaptop.price = 1299; // Change the price

// Displaying both objects
console.log('Original Laptop:', laptop); // Output: { brand: 'Dell', model: 'XPS 13', price: 999 }
console.log('New Laptop:', newLaptop); // Output: { brand: 'Dell', model: 'XPS 15', price: 1299 }

  console.log("---------------------------");

/* 
15. **Adding Methods to an Existing Object with Object.assign**  
   You have a `robot` object:
   ```javascript
   const robot = {
     name: 'Robo'
   };
   ```
   Add two new methods to the `robot` object: `greet()` and `performTask()`. The `greet` method should log the robot's name, and `performTask` should log a generic task message.        */

   // Existing robot object
const robot = {
    name: 'Robo'
};

// Adding methods to the robot object
Object.assign(robot, {
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    },
    performTask: function() {
        console.log(`${this.name} is performing a task.`);
    }
});

// Calling the methods
robot.greet();          // Output: Hello, my name is Robo.
robot.performTask();   // Output: Robo is performing a task.

  console.log("---------------------------");

  
/* 
16. **Iterating through Object Properties using Object.entries**  
   Given the following object:
   ```javascript
   const movie = {
     title: 'The Matrix',
     director: 'Wachowskis',
     year: 1999
   };
   ```
   Iterate through the object and log each key-value pair in the format: `key: value`.        */

   const movie5 = {
    title: 'The Matrix',
    director: 'Wachowskis',
    year: 1999
};

// Iterating through the object properties
Object.entries(movie5).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

  console.log("---------------------------");

  
/* 
17. **Dynamic Access to Object Keys**  
   Write a function getProperty(obj, key) that takes an object and a key as arguments. Check if the key exists in the object. If it exists, return the value of the key; otherwise, return "Key not found".        */

   function getProperty(obj, key) {
    // Check if the key exists in the object
    if (key in obj) {
        return obj[key]; // Return the value if the key exists
    } else {
        return "Key not found"; // Return a message if the key does not exist
    }
}

// Example usage
const movie6 = {
    title: 'The Matrix',
    director: 'Wachowskis',
    year: 1999
};

console.log(getProperty(movie6, 'title'));      // Output: The Matrix
console.log(getProperty(movie6, 'director'));   // Output: Wachowskis
console.log(getProperty(movie6, 'year'));       // Output: 1999
console.log(getProperty(movie6, 'genre'));      // Output: Key not found

  console.log("---------------------------");
  
  