/*
Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. 
Con que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir 
al final del algoritmo el resultado.
*/

let array1 = [1, 2, 2, 4, 5];
let array2 = [1, 2, 2, 5];

//Problema: no logro encontrar la forma de chequear que son iguales e imprimir una sola vez el mensaje. Es decir,
//para eso deberia poder sacar el if (son iguales) del for loop, pero no logro ver la forma.
// //First if: checks whether arrays have same length.
// if (array1.length == array2.length) {
//   console.log('Arrays have same length');

//   //Iterates over each array and compares element by element.
//   for (i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       console.log(
//         `Arrays are different at index ${i}. Array1 has a value of ${array1[i]}, while Array2 ${array2[i]}`
//       );
//     } else {
//       console.log('Arrays are equal in all it´s elements.');
//     }
//   }
// } else {
//   console.log('Arrays are different.');
// }

//-------------------------------------------------------------------------------------------------------------------------------------
//Solution: this is an array comparison function.
//It first checks whether arrays have same length. If so it continues to check if they are equal, element by element.
//If at least one of the values at any given index is different, it prints that they are different.
//The return values make the function to end. Otherwise, regardless of the equality, the function will reach the "Arrays are equal" log.

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //The variable takes the length of one of the compared arrays, since they are equal.
    console.log('Arrays have different length.');
    return false;
  } else {
    let arrayLength = arr1.length;

    for (i = 0; i < arrayLength; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log('Arrays are different.');
        return false;
      }
    }
  }
  console.log('Arrays are equal');
}
//compareArrays([1, 2, 2, 3, 5], [1, 2, 2, 3, 5]);
compareArrays(array1, array2);
