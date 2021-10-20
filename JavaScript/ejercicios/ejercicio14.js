/*
Construir un algoritmo que resuelva el problema que tienen unos surtidores de gasolina, que registran lo que surten 
en galones, pero el precio de la gasolina se fija en litros. El algoritmo debe calcular e imprimir el precio que hay 
que cobrarle al cliente. Precio gasolina = 1.333€/litro1 galón = 3,78541 litros
*/

var prompt = require("prompt-sync")();

const gallonsExpended = parseInt(prompt("Please type in expended gallons: "));
const litersExpended = gallonsExpended * 3.78541;
const gasPrice = 1.3333;
const finalPrice = (litersExpended * gasPrice).toFixed(2); //toFixed() cuts decimals to the desired quantity depending on the parameter, in this case to 2.

console.log(`Gasoline price: $${finalPrice}.`);
