//Write a code which can give the gardes to Students according to their marks.

/* 80-100: A
   70-79: B
   60-69: C
   50-59: D
   35-49: E
   0-34: F 
*/

let marks = 81;

if (marks>=80 && marks<=100) {
    console.log('Grade:A');
}

else if (marks>=70 && marks<=79) {
    console.log('Grade:B');
}

else if (marks>=60 && marks<=69) {
    console.log('Grade:C');
}

else if (marks>=50 && marks<=59) {
    console.log('Grade:D');
}

else if (marks>=35 && marks<=69) {
    console.log('Grade:E');
}

else if (marks>=0 && marks<35) {
    console.log('Grade:Fail');
}

else {
  console.log('Please enter a valid marks!!!');   
}
