//Allows us to take a user's input
const prompt = require('prompt-sync')()

function calculateChaiIngredients(){
    //Prompts the user then user's input is stored in a variable
    let numberOfCups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"))
    
    //Calculates the amounts needed for the Tea and each are stored in variables
    
    let water = numberOfCups * 200    // 200ml of water per cup
    let milk = numberOfCups * 50      // 50 ml of milk per cup
    let teaLeaves = numberOfCups      // 1 tablespoon of tea leaves per cup
    let sugar = numberOfCups * 2      // 2 teaspoons of sugar per cup

    //Returns a string with the full description of how to make the Chai with the correct ingredients amount
    return `To make ${numberOfCups} cups of Kenyan Chai, you will need 
        Water: ${water} ml\n
        Milk: ${milk} ml\n
        Tea Leaves (Majani): ${teaLeaves} tablespoons\n
        Sugar (Sukari): ${sugar} teaspoons\n
        Enjoy your Chai Bora!`
}
//Calls the function and prints out the output of the function
console.log(calculateChaiIngredients())