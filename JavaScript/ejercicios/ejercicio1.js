/*Dadas dos variables numéricas A y B con dos valores iniciales diferentes, se pide realizar un algoritmo que intercambie
los valores de ambas variables y muestre cuánto valen al final cada una de ellas (recuerda la asignación).*/
var prompt = require("prompt-sync")();

let a = parseInt(prompt("Valor variable A: "));
let b = parseInt(prompt("Valor variable B: "));

console.log("--------ANTES--------");
console.log(`a = ${a}, b = ${b}`);

let tmp = a;
a = b;
b = tmp;

console.log("--------DESPUES--------");
console.log(`a = ${a}, b = ${b}`);
