/*
Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. N
se leerá por teclado
*/

var prompt = require("prompt-sync")();

let numQty = parseInt(prompt("Introduce N: "));

let count = 1;
let sum = 0;

while (count <= numQty) {
  sum = sum + count;
  count += 1;
}
console.log(sum);
