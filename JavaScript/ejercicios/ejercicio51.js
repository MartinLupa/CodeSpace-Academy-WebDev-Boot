var prompt = require("prompt-sync")();
/*
Comprobar si un número N positivo es primo. 
Se dice que un número entero positivo N es un número primo si los únicos 
enteros positivos que lo dividen son exactamente 1 y N (él mismo). 
*/
const N = parseInt(prompt("Introduce N: "));

function isPrime(num) {
  for (i = 0; i < num; i++) {
    if (num % i == 0) {
      return false;
    } else if (num % 1 == 0 && num % num == 0) {
      return true;
    }
  }
}

console.log(isPrime(N));
