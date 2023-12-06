/**

Electronic Piggy Bank! (But now as a static webpage!)

Your little brother Timmy is back at it again with the electronic piggy banks. 
Now it is 2023 so Timmy doesn't want to run a Java program to enter in his money. Instead, he prefers a website!

Functions to consider using:

1. Get an HTML element using its id
    let htmlElement = document.getElementById("id");

2. Adding an event listener for click:
    htmlElement.addEventListener("click", function)

3. Getting the user's input text:
    [The name of your input variable].value

Some other helpful functions:
str.toLowerCase() //turns the string str into lowercase 
.toFixed(2) // rounds a number to 2 decimal places
 */

let piggyBankAmount = 0.0;
let button = document.getElementById("coinEnter");
let input = document.getElementById("coinInput");
button.addEventListener("click", () => {
    const coinType = input.value.toLowerCase();
    switch(coinType){
        case "p":
            piggyBankAmount += 0.01;
            break;
        case "n":
            piggyBankAmount += 0.05;
            break;
        case "d":
            piggyBankAmount += 0.10;
            break;
        case "q":
            piggyBankAmount += 0.25;
            break;
    }
    input.value = "";
    updatePiggyBankAmount();
});

function updatePiggyBankAmount(){
    document.getElementById("piggyBank").textContent = "$" + piggyBankAmount.toFixed(2);
}