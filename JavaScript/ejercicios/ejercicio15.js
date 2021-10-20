/*
Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero, se vuelva a pedir el 
número por teclado, así hasta que se teclee un número mayor que cero, recuerda la estructura while.
*/

var prompt = require("prompt-sync")();
let num;

/*
//Solución con DO-WHILE.
do {
  num = parseInt(prompt("Introduzca un número entero: "));
} while (num <= 0 || isNaN(num));

if (num === 0) {
  console.log("NULO");
} else if (num % 2 === 0) {
  console.log("PAR");
} else {
  console.log("IMPAR");
}
*/
//Solución con WHILE.
while (num <= 0 || isNaN(num)) {
  num = parseInt(prompt("Introduzca un número entero: "));
}

if (num === 0) {
  console.log("NULO");
} else if (num % 2 === 0) {
  console.log("PAR");
} else {
  console.log("IMPAR");
}
