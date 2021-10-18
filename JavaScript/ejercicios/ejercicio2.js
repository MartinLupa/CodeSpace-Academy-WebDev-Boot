//Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.
var prompt = require("prompt-sync")();

//Opción 1: al ingresar una opción inválida, sólo pide una vez más la operación matemática.

/*const num1 = parseInt(prompt('Por favor introduzca un primer número: '));
const num2 = parseInt(prompt('Ingrese un segundo valor: '));
const operacion = prompt(
  'Qué operación matemática quiere realizar? (suma, resta, producto o división'
);

if (operacion === 'suma') {
  console.log(num1 + num2);
} else if (operacion === 'resta') {
  console.log(num1 - num2);
} else if (operacion === 'producto') {
  console.log(num1 * num2);
} else if (operacion === 'división') {
  console.log(num1 / num2);
} else {
  alert('Por favor introduzca una operación válida');
  operacion = prompt(
    'Qué operación matemática quiere realizar? (suma, resta, producto o división'
  );
} */

//Opción 2: al ingresar operación inválida, pide indefinidamente el ingreso de una operación válida.
//USO DE RECURSIÓN.
const num1 = parseInt(prompt("Por favor introduzca un primer número: "));
const num2 = parseInt(prompt("Ingrese un segundo número: "));

function opMat() {
  const operacion = prompt(
    "Qué operación matemática quiere realizar? (suma, resta, producto o división)"
  );
  if (operacion === "suma") {
    console.log(num1 + num2);
  } else if (operacion === "resta") {
    console.log(num1 - num2);
  } else if (operacion === "producto") {
    console.log(num1 * num2);
  } else if (operacion === "división") {
    console.log(num1 / num2);
  } else {
    opMat();
  }
}

opMat();
