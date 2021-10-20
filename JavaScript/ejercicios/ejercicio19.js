/*
Dada una secuencia de longitud indefinida de números leídos por teclado, que acabe con un –1, por
ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo que calcule la media aritmética.
Suponemos que el usuario no insertará número negativos.
*/

const numArr = [5, 3, 0, 2, 4, 4, 0, 0, 2, 3, 6, 0, -1];
let totalSum = 0;

//OPTION 1: Supposing that the -1 is the parameter that finishes the array and will ALWAYS be the ending value of the array.
for (i = 0; i < numArr.length - 1; i++) {
  totalSum += numArr[i];
}
let average = totalSum / (numArr.length - 1);

console.log(`Total: ${totalSum}`);
console.log(`Average: ${average}`);

//OPTION 2: supposing -1 can be in any position of the array, but it is still the value that determines the end of the array we want to calculate the values with.
