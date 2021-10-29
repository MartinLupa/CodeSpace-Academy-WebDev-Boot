/*
Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. 
Con que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir 
al final del algoritmo el resultado.
*/

let array1 = [1, 2, 2, 4, 5];
let array2 = [1, 2, 2, 4, 5];

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //The variable takes the length of one of the compared arrays, since they are equal.
    console.log("Arrays have different length.");
    return false;
  } else {
    let arrayLength = arr1.length;

    for (i = 0; i < arrayLength; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log("Arrays are different.");
        return false;
      }
    }
  }
  console.log("Arrays are equal");
}
compareArrays(array1, array2);

//-------------------------------------------------------------------------------------------------------------------------------------
//Solution: this is an array comparison function.
//It first checks whether arrays have same length. If so it continues to check if they are equal, element by element.
//If at least one of the values at any given index is different, it prints that they are different.
//The return values make the function to end. Otherwise, regardless of the equality, the function will reach the "Arrays are equal" log.
