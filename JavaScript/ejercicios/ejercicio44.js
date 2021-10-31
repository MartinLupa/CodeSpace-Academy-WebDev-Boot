var prompt = require('prompt-sync')();
/*
Partir del ejercicio 2 y añadir la siguiente funcionalidad:El usuario tendrá un 
menú numérico en pantalla para poder elegir entre las operaciones a realizar. Si 
da una opción incorrecta (no existe), el programa avisará al usuario y volverá a 
mostrar el menú. Hará esto hasta que el usuario elija la opción de salir del 
programa. Ejemplo de menú impreso por pantalla:“Seleccione el número de una de 
las siguientes opciones:
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
5: Salir del programa.”
*/

const num1 = parseInt(prompt('Por favor introduzca un primer número: '));
const num2 = parseInt(prompt('Ingrese un segundo número: '));

function opMat() {
  let operacion = parseInt(
    prompt(
      'Opciones: \n1) Sumar \n2) Restar \n3) Multiplicar \n4) Dividir \n5) Salir del programa \nSeleccione el número de una de las opciones: '
    )
  );
  if (operacion === 1) {
    console.log(num1 + num2);
  } else if (operacion === 2) {
    console.log(num1 - num2);
  } else if (operacion === 3) {
    console.log(num1 * num2);
  } else if (operacion === 4) {
    console.log(num1 / num2);
  } else if (operacion === 5) {
    return false;
  } else {
    console.log('Por favor introduzca una operación válida..');
    opMat();
  }
}

opMat();
