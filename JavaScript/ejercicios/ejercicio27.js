<<<<<<< HEAD
var prompt = require("prompt-sync")();
=======
var prompt = require('prompt-sync')();
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
/*
Desarrollar un algoritmo que imprima la tabla de multiplicación del número N introducido por teclado. 
Para N = 13, el output sería:
13 X 1 = 13 
13 X 2 = 26
...
13 X 10 = 130
*/

<<<<<<< HEAD
let N = parseInt(prompt("Introduzca un número: "));
=======
let N = parseInt(prompt('Introduzca un número: '));
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3

for (i = 1; i <= 10; i++) {
  console.log(`${N} X ${i} = ${N * i}`);
}
