// Create the hotel menu card And generate the Bill.

console.log("WELCOME TO AASHIQ DA DHABA");
console.log(  );

console.log("************");

// Selecting Veg or Non-veg showMenu

let showMenu = () => {

    let selectChoice =  parseInt(prompt("Select Choice: \n 1 : Veg \n 2 : Non-Veg \n Enter Your Choice: "));
    let showAlert = alert("Please enter Valid choice !")

    switch (selectChoice) {
        case Veg:
            showVegMenu();
            break;
    
        case Non-Veg:
            showNonVegMenu();
            break;

        default:
            showAlert
            break;
    }
    
}


