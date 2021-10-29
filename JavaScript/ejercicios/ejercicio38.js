/*
Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], 
guardar los valores de este array en otro array distinto pero con los valores 
invertidos, es decir, que el segundo array deberá tener los valores [5,4,3,2,1]
*/

const originalArray = [1, 2, 3, 4, 5];
let newArray = [];

function invertArray(array1, array2) {
  for (i = array1.length - 1; i >= 0; i--) {
    array2.push(array1[i]);

    /*Otra opción
  for (i = 0; i < array1.length; i++) {
    array2[i] = array1[array1.length - 1 - i];
  }*/
  }
}

invertArray(originalArray, newArray);

console.table({ originalArray, newArray });
