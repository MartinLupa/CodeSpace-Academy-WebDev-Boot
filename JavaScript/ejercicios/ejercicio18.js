/*
Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir
de N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.
*/
const numArr = [2, 6, 8, 13, 1, 7, 4, 8, 10, 25]; //38 withouth odd numbers.

let evenCounter = 0;
for (i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 === 0) {
    evenCounter += numArr[i];
  }
}
console.log(evenCounter);
