var prompt = require('prompt-sync')();
/*
Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta atrás se introducirá por teclado. 
Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.•Investigar cómo hacer los intervalos en JS
*/

let time = parseInt(prompt('Introduzca tiempo: '));
/*
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
