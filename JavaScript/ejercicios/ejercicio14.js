var prompt = require('prompt-sync')();

const gallonsExpended = parseInt(prompt('Please type in expended gallons: '));
const litersExpended = gallonsExpended * 3.78541;
const gasPrice = 1.3333;
const finalPrice = (litersExpended * gasPrice).toFixed(2); //toFixed() cuts decimals to the desired quantity depending on the parameter, in this case to 2.

console.log(`Gasoline price: $${finalPrice}.`);
