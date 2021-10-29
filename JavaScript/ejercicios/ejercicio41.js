var prompt = require("prompt-sync")();
/*
Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
a)Obtenga cuántos números son mayores que 0.
b)Calcule el promedio de los números positivos.
c)Obtenga el promedio de todos los números.
*/

const N = parseInt(prompt("Introduce N: "));
let array = [];

//The random mixer consist of generating a random number between 1 and 0.
//The if statement checkes whether that random mixer is > or < to 0.5. If it is > it activates the positiveRandom which pushes
//a positive random number into the array. If it is < to 0.5, then a negative number is pushed, and the cycle repeats until
//the array´s lenght is = N. The array can be randomly composed of all positive, all negative or a combination of numbers.

while (array.length < N) {
  let randomMixer = Math.random();
  if (randomMixer > 0.5) {
    let positiveRandom = Math.floor(Math.random() * N) + 1;
    array.push(positiveRandom);
  } else {
    let negativeRandom = Math.floor(Math.random() * -N) + 1;
    array.push(negativeRandom);
  }
}

console.log(array);
//A) Calculate how many numbers are over 0.

let overCero = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    overCero += 1;
  }
}
console.log(`A) There are ${overCero} positive numbers.`);

//B)Calculate average of positive numbers.
let positiveNumArray = [];
let positiveSum = 0;
for (j = 0; j < array.length; j++) {
  if (array[j] > 0) {
    positiveNumArray.push(array[j]);
    positiveSum += array[j];
  }
}
let positiveAverage = positiveSum / positiveNumArray.length;
console.log(positiveNumArray);
console.log(`B) The average of the positive numbers is: ${positiveAverage}`);

//C) Calculate average of all numbers:
let totalSum = 0;
for (k = 0; k < array.length; k++) {
  totalSum += array[k];
}
let totalAverage = totalSum / array.length;
console.log(`A) The average of all numbers is: ${totalAverage}`);
