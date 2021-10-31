var prompt = require('prompt-sync')();

/*
Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta atrás se introducirá por teclado. 
Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.•Investigar cómo hacer los intervalos en JS
*/

let time = parseInt(prompt('Introduzca tiempo: '));

const timer = setInterval(function () {
  if (time === 0) {
    clearInterval(timer);
    console.log('Ring');
  } else if (time === 1) {
    console.log(`${time} segundo restante.`);
    time--;
  } else {
    console.log(`${time} segundos restantes.`);
    time--;
  }
}, 1000);
