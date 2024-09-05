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

// Veg Menu Function created 

let showVegMenu = () => {

    let choice = parseInt(prompt("Veg Food Menu : \n 1: Starter \n 2: Main Course \n 3:Pasta & Pizza \n 4: Salads \n 5: Dessert"))
    let showAlert = alert("Please enter Valid choice !")

    switch (choice) {
        case Starter:
            starterMenu()
            break;

         case Main_Course:
            Main_CourseMenu()
            break;
            
        case Pasta_&_Pizza:
            pastaAndPizzaMenu()
            break;

        case Salads:
            saladsMenu()
            break;

        case Dessert:
            dessertMenu()
            break;
    
        default:
            showAlert
            break;
    }
}


