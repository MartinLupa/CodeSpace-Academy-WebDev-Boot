<<<<<<< HEAD
var prompt = require("prompt-sync")();
=======
var prompt = require('prompt-sync')();
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
/*
Desarrollar una calculadora de factoriales para números introducidos por teclado.
El factorial de un número N es la multiplicación de todos los números desde 1 
hasta N. Es decir, para N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120
*/
<<<<<<< HEAD
let N = parseInt(prompt("Introduce N para calcular su factorial: "));
=======
let N = parseInt(prompt('Introduce N para calcular su factorial: '));
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
let factorial = N;
for (i = N - 1; i >= 1; i--) {
  factorial *= i;
}
console.log(`El factorial de ${N} es: ${factorial}`);
