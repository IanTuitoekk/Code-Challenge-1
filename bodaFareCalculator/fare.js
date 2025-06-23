//Allows us to take a user's input
const prompt = require('prompt-sync')()

function calculateBodaFare(){
    //Prompts the user then user's input is stored in a variable
    let distanceInKm = parseInt(prompt("How many kilometres is your trip:"))

    // Checks if the input is a number 
    if(isNaN(distanceInKm)){
       return "Type in a number"
    }
    else{

    //Assigns the variables set numbers
    let baseFare = 50
    let chargePerKm = 15

    //Calculates the total amount of money to be paid as fare
    let totalFare = baseFare + (distanceInKm * chargePerKm)

    //Returns a string with the calculated amounts required for a specified distance
    return `Uko kwote? Io ni ${distanceInKm} km 
    Ukikalia PikiPiki: KES ${baseFare} 
    Mpaka Uko: KES ${distanceInKm * chargePerKm} 
    Total: KES ${totalFare} \n
    
    Panda PikiPiki!`
}
}
//Calls the function and prints out the output of the function
console.log(calculateBodaFare())