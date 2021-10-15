/*Dadas dos variables numéricas A y B con dos valores iniciales diferentes, se pide realizar un algoritmo que intercambie
los valores de ambas variables y muestre cuánto valen al final cada una de ellas (recuerda la asignación).*/

a = 100;
b = 50;

console.log("--------ANTES--------");
console.log(`a = ${a}, b = ${b}`);

tmp = a;
a = b;
b = tmp;

console.log("--------DESPUES--------");
console.log(`a = ${a}, b = ${b}`);

var prompt = require("prompt-sync")();
//
// get input from the user.
//
var n = prompt("How many more times? ");
