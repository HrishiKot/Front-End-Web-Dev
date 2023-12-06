let age = 25;
let year = 2023;

console.log(age, year);

let firstName = "Saketh";
let lastName = "Igot";

let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName.length);

console.log(fullName[2]);

console.log(fullName.toUpperCase());

//Conditionals
let date = 17;
if(date === "17"){
    console.log("Yay!");
}

if(date === 17){
    console.log("Yeah");
}

//functions
function add(a, b) {
    return a+b;    
}

console.log(add(1, 2));

function printHi(name){
    return "hi " + name;
}

function printBye(func){
    return func("Brandon") + " bye"
}

console.log(printBye(printHi));

const add1 = (a, b) => (a + b);
console.log(add1(2, 3));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

console.log(multiply(3, 3) === 9 ? "Yay": "BOO");