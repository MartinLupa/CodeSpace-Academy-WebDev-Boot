<<<<<<< HEAD
var prompt = require("prompt-sync")();
=======
var prompt = require('prompt-sync')();
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
/*
EjercicioAlgoritmo que lea un número entero (altura) y a partir de él cree una escalera 
invertida de asteriscos con esa altura. Deberá quedar así, si ponemos una altura de 5.
 *****
  ****
   ***
    **
     *
*/
<<<<<<< HEAD
let N = parseInt(prompt("Introduce N: "));

let dot = "*";
let space = " ";
=======
let N = parseInt(prompt('Introduce N: '));

let dot = '*';
let space = ' ';
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
let counter = -1;
for (i = N; i > 0; i--) {
  counter++;
  console.log(space.repeat(counter), dot.repeat(i));
}
