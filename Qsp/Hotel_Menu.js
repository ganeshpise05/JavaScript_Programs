// Create the hotel menu card And generate the Bill.

console.log("WELCOME TO AASHIQ DA DHABA");
console.log(  );

console.log("************");

// Selecting Veg or Non-veg showMenu

let showMenu = () => {

    let selectChoice =  parseInt(prompt("Select Choice: \n 1: Veg \n 2: Non-Veg \n Enter Your Choice: "));
   

    switch (selectChoice) {
        case 1:
            showVegMenu();
            break;
    
        case 2:
            showNonVegMenu();
            break;

        default:
            let showAlert = alert("Please enter Valid choice !")
            break;
    }
    
}

// Veg Menu Function created 

let showVegMenu = () => {

    let choice = parseInt(prompt("Veg Food Menu : \n 1: Starter \n 2: Main Course \n 3:Pasta & Pizza \n 4: Salads \n 5: Dessert"))
   

    switch (choice) {
        case 1:
            starterMenu()
            break;

         case 2:
            Main_CourseMenu()
            break;
            
        case 3:
            pastaAndPizzaMenu()
            break;

        case 4:
            saladsMenu()
            break;

        case 5:
            dessertMenu()
            break;
    
        default:
            let showAlert = alert("Please enter Valid choice !")
            break;
    }
}

// In veg menu there are five methods are present.
// Veg Menu : 1.starterMenu() 2.Main_CourseMenu() 3.pastaAndPizzaMenu() 4.saladsMenu() 5.dessertMenu()

let starterMenu = () => 
{
    let choice = parseInt(prompt("1.StarterMenu: \n .Veg Spring Rolls \n .Paneer Tikka \n .Hummus with Pita Bread \n .Veg Nachos with Salsa "));

    switch (choice) {
        case 1:
            
            break;

        case 2:
            
            break;

        case 3:
            
            break;


        case 4:
            
            break;

        case 5:
            
            break;

        case 6:
            
            break;

        case 7:
            
            break;

        case 8:
            
            break;
    
        default:
            let showAlert = alert("Please enter Valid Starter Menu !")
            break;
    }
}

