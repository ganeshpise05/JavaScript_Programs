// let heading = document.getElementById("heading")
// console.log(heading);

/*
// 1: Targeting element by using for loop
let input = document.getElementsByTagName("input")
console.log(input);
// input[0].title = "Input 1"

for (let i = 0; i < input.length; i++) {
     input[i].style.backgroundColor = "pink"
    
}

*/

/*
// 2:  Targeting element by using class name
let userInput = document.getElementsByClassName("userInput")
console.log(userInput);

*/

// 3:  Targeting element by using QuerySelector (only perticular tag/element target) ,QuerySelectorAll (for All tag target)
let Input = document.querySelector(".userInput");
console.log(Input);

let Input1 = document.querySelectorAll(".userInput");
console.log(Input1);


