//Get user to a input a number using prompt("Enter a number:").Check the entered number is multiple of 5 or not

let num = prompt("Enter a Number:");

if (num%5===0) {
    console.log("The given number ",num,' is multiple of 5');
} else {
    console.log("The given number ",num,' is not multiple of 5');
}