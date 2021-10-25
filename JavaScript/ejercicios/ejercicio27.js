var prompt = require("prompt-sync")();

/*
Desarrollar un algoritmo que imprima la tabla de multiplicación del número N introducido por teclado. 
Para N = 13, el output sería:
13 X 1 = 13 
13 X 2 = 26
...
13 X 10 = 130
*/

let N = parseInt(prompt("Introduzca un número: "));

for (i = 1; i <= 10; i++) {
  console.log(`${N} X ${i} = ${N * i}`);
}
