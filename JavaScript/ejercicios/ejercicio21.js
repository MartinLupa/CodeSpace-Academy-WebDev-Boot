/*
Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media
de todos ellos. Piensa como debemos inicializar las variables.
*/

var prompt = require("prompt-sync")();

let num = parseInt(prompt("Introduce a number: "));

let max = 0;
let min = 0;
let sum = 0;
let numAmount = 0;

while (num !== 0) {
  sum += num;
  numAmount += 1;
  //Checks maximum number
  if (num > max) {
    max = num;
  }
  //Checks minimum number
  if (num < min) {
    min = num;
  }
  //Repeats prompt everytime num !== 0
  num = parseInt(prompt("Introduce a number: "));
}

if (num === 0) {
  console.log(`Total: ${sum}`);
  console.log(`Max: ${max}`);
  console.log(`Min: ${min}`);
  console.log(`Average: ${sum / numAmount}`);
}
