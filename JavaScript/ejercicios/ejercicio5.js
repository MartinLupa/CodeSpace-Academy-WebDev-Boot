/*
Construir algoritmo tal que con un número entero como entrada, determine e imprima si es positivo,
negativo o nulo.
*/
var prompt = require("prompt-sync")();
const num = parseInt(prompt("Introduzca un número: "));

if (isNaN(num)) {
  console.log("Por favor ingrese un número.");
} else if (Number.isInteger(num)) {
  console.log("Por favor introduzca un número entero.");
} else {
  if (num < 0) {
    console.log("NEGATIVO");
  } else if (num === 0) {
    console.log("CERO");
  } else {
    console.log("POSITIVO");
  }
}
