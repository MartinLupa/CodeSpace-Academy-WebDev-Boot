/*
Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. N
se leerá por teclado
*/
const numArr = [2, 6, 8, 13, 1, 7, 4, 8, 10, 25];
let counter = 0;
for (i = 0; i < numArr.length; i++) {
  counter += numArr[i];
}
console.log(counter);
