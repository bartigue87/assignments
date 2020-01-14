// Your script must have:
// A function that adds two numbers and returns the result
// A function that multiplies two numbers and returns the result
// A function that divides two numbers and returns the result
// A function that subtracts two numbers and returns the result
// Each function will have 2 parameters, num1, num2
// On the console the prompt will print to the user:
// Please enter your first number (store that number)
// Please enter your second number (store that number)
// Please enter the operation to perform: add, sub, mul, div (then store the operation)
// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// You will then print to the console: The result is: [the result]
const readline = require("readline-sync")

function add(num1, num2){
    return num1 + num2 
    }
// var addResult = add(10, 8)
// // console.log(addResult)

function multiply(num1, num2){
    return num1 * num2
}
// var multResult = multiply(4, 22)
// //console.log(result)

function divide(num1, num2){
    return num1 / num2
}
// var divResult = divide(174, 2)
// //console.log(result)

function subtract(num1, num2){
    return num1 - num2
}
// var subResult = subtract(10, 4)
// //console.log(result)

var num1 = Number(readline.question('What is your first number? '));
console.log("Your first number is " +num1 + ".")

var num2 = Number(readline.question('What is your second number? '));
console.log("Your second number is " + num2 + ".")

var operation = readline.question('What operation should I perform: add, subtract, multiply, divide? ');
if (operation === "add"){
    console.log("the result is " + add(num1, num2))
} else if (operation === "multiply"){
    return console.log("the result is " + multiply(num1, num2))
} else if (operation === "divide"){
    return console.log("the result is " + divide(num1, num2))
} else if (operation === "subtract"){
    return console.log("the result is " + subtract(num1, num2))
}
