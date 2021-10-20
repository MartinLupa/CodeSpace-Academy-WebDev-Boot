/*
Dada una secuencia de longitud indefinida de números leídos por teclado, que acabe con un –1, por
ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo que calcule la media aritmética.
Suponemos que el usuario no insertará número negativos.
*/
var prompt = require("prompt-sync")();

let num = parseInt(
  prompt("Please introduce a number sequence. Enter -1 to finish: ")
);

let count = 0;
let nAmount = 0;

while (num != -1) {
  count += num;
  nAmount += 1;
  num = parseInt(
    prompt("Please introduce a number sequence. Enter -1 to finish: ")
  );
}

if (nAmount === 0) {
  console.log("No number was introduced.");
} else {
  console.log(`N: ${nAmount}`);
  const average = count / nAmount;
  console.log(`Sum: ${count}`);
  console.log(`Average: ${average}`);
}
