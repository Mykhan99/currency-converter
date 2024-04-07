#!/usr/bin/env node


import inquirer from "inquirer";

const currency: any={
    USD: 1, // Base line
    PKR: 280, 
    SR:3.751, 
    EURO:0.923,
    BHD:0.377,
    JPY:151.577    
}
 const answer =await inquirer.prompt([{

    message: "Which currency do you want to convert: ",
    type: 'list',
    name: `firstCurrency`,
    choices: [`USD`, `PKR`, `SR`, `EURO`, `BHD`, `JPY`]
 }, 
 {

    message: "Which currency do you want to buy :",
    type: 'list',
    name: `secCurrency`,
    choices: [`USD`, `PKR`, `SR`, `EURO`, `BHD`, `JPY`]
 }, 
 {

    message: "How much amount you want to convert :",
    type: 'number',
    name: `amount`,
    } 
]);
 
let fromCurrency = currency[answer.firstCurrency];
let toCurrrency = currency[answer.secCurrency];
let TotalAmount = answer.amount;
let baseLine = TotalAmount/ fromCurrency;
let convtAmount= baseLine * toCurrrency;
let finalAmount=convtAmount.toFixed(2);
console.log();
console.log(`Your converted amount is :`, finalAmount);



