/*
Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. 
Con que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir 
al final del algoritmo el resultado.
*/

let array1 = [1, 2, 2, 4, 5];
let array2 = [1, 2, 2, 4, 5];
let areEqual;

//First if: checks whether arrays have same length.
if (array1.length == array2.length) {
  console.log('Arrays have same length');

  //Iterates over each array and compares element by element.
  for (i = 0; i < array1.length; i++) {
    //--------------------------------------------------------------
    if (array1[i] !== array2[i]) {
      console.log(
        `Arrays are different at index ${i}. Array1 has a value of ${array1[i]}, while Array2 ${array2[i]}`
      );
    } else {
      console.log('Arrays are equal in all it´s elements.');
    }
  }
} else {
  console.log('Arrays are different.');
}

//Problema: no logro encontrar la forma de chequear que son iguales e imprimir una sola vez el mensaje. Es decir,
//para eso deberia poder sacar el if (son iguales) del for loop, pero no logro ver la forma.
