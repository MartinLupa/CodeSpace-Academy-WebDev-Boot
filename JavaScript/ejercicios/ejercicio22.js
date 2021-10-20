/*
Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y
100.
*/

var prompt = require("prompt-sync")();

let count = 1;
let multipleOf1 = 0;
let multipleOf1Arr = [];
let multipleOf2 = 0;
let multipleOf2Arr = [];

console.log(
  "Este programa calcula la cantidad de números que existen entre 1 y el mayor número ingresado, y que son divisible por el primer y segundo multiplo."
);
let maxCount = parseInt(prompt("Seleccione el mayor número a considerar: "));
let firstMultiple = parseInt(prompt("Seleccione el primer multiplo: "));
let secondMultiple = parseInt(prompt("Seleccione el segundo multiplo: "));

while (count <= maxCount) {
  count++;
  if (count % firstMultiple === 0) {
    multipleOf1++;
    multipleOf1Arr.push(count);
  }
  if (count % secondMultiple === 0) {
    multipleOf2++;
    multipleOf2Arr.push(count);
  }
}

console.log(`Multiplos de ${firstMultiple}: ${multipleOf1}`, multipleOf1Arr);
console.log(`Multiplos de ${secondMultiple}: ${multipleOf2}`, multipleOf2Arr);
