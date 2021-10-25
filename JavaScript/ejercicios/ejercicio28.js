<<<<<<< HEAD
var prompt = require("prompt-sync")();

=======
var prompt = require('prompt-sync')();
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
/*
Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta atrás se introducirá por teclado. 
Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.•Investigar cómo hacer los intervalos en JS
*/

<<<<<<< HEAD
let time = parseInt(prompt("Introduzca tiempo: "));
/*

ver setInterval() y clearInterval();

=======
let time = parseInt(prompt('Introduzca tiempo: '));
/*
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
for (let i = time; i >= 0; i--) {
  if (i > 1) {
    console.log(`${i} segundos restantes.`);
  } else if (i === 1) {
    console.log(`${i} segundo restante.`);
  } else {
    console.log("Ring!!!!");
  }
}
*/
<<<<<<< HEAD

const timer = setInterval(function () {
  if (time === 0) {
    clearInterval(timer);
    console.log("Ring");
  } else if (time === 1) {
    console.log(`${time} segundo restante.`);
    time--;
  } else {
    console.log(`${time} segundos restantes.`);
    time--;
  }
}, 1000);
=======
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
