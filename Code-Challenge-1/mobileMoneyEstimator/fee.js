//Allows us to take a user's input
const prompt = require ('prompt-sync')()

function estimateTransactionFee(){
    //Prompts the user then user's input is stored in a variable
    let amountToSend = parseInt(prompt("Unatuma Ngapi? (KES)"))
     //Checks if the input is a number
    if(isNaN(amountToSend)){
       return "Type in a number"
    }
    else{

    //Calculates the transaction fee 
    let basicTransactionFee = 0.015 * amountToSend
    //Set the correct amount of transaction considering the min and max values for the transaction fee
    let correctFee

    if(basicTransactionFee < 10){
        correctFee = 10
    }
    else if (basicTransactionFee > 70){
        correctFee = 70
    }
    else{
        correctFee = basicTransactionFee
    }

    //Calculates the total amount that will be debited
    let total = amountToSend + correctFee

    //Returns a string with the calculated values
    return `Sending KES ${amountToSend}:
    Calculated Transaction Fee: KES ${correctFee}
    Total amount to be debited: KES ${total}\n
    Send Money Securely!`
}
}

//Calls the function and prints out the output of the function
console.log(estimateTransactionFee())