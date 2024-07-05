let age=8;

if (age>=18 && age<=35) {
    console.log("You are a young person");
}

else if ( age>35 ) {
    console.log("you are on the way to very old.");
}

else if (age<18 && age>=14) {
    console.log('you are Adult');
}

else if (age>=9 && age<14) {
    console.log('you are Children');
} 

else if (age>=4 && age<9) {
    console.log("Bacche ho abhi.");
} 

else {
    console.log('Please enter a valid age.')
}