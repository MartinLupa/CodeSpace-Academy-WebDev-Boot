/*
Desarrollar un algoritmo que nos calcule el cuadrado de los 9 primeros números naturales.
*/
var prompt = require("prompt-sync")();

let num = parseInt(prompt("Introduce N: "));
let count = 1;
let squareNum = 0;

for (i = 0; i < num; i++) {
  count += 1;
  squareNum = count * count;
  console.log(squareNum);
}
