/*
Dado el sueldo de un trabajador, diseña un algoritmo que aplique un incremento de sueldo del 15%
si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.
*/
var prompt = require('prompt-sync')();

let sueldo = prompt('Ingrese su sueldo: ');
if (sueldo < 1000) {
  let nuevoSueldo = sueldo * 1.15;
  console.log(nuevoSueldo);
} else {
  console.log(sueldo);
}
