var prompt = require('prompt-sync')();
/*
EjercicioAlgoritmo que lea un número entero (altura) y a partir de él cree una escalera 
invertida de asteriscos con esa altura. Deberá quedar así, si ponemos una altura de 5.
 *****
  ****
   ***
    **
     *
*/
let N = parseInt(prompt('Introduce N: '));

let dot = '*';
let space = ' ';
let counter = -1;
for (i = N; i > 0; i--) {
  counter++;
  console.log(space.repeat(counter), dot.repeat(i));
}
