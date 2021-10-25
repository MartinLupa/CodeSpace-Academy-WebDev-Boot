/*
Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir
de N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.
*/

var prompt = require('prompt-sync')();
/*
let N = parseInt(prompt('Specify N: '));

//Sets the starting value of counter, which should be N. If N is an even number (ex. 2), the next even number (4) is the starting point for the sum --> 4+6+8+10+12
//In case of N taking an odd number (ex. 3), the next even number (4) is the starting point for the sum --> 4+6+8+10+12
let counter = N;

while (counter <= N + 8) {
  if (N % 2 === 0) {
    counter += 2;
    console.log(counter);
  }
  if (N % 2 === 1) {
    let tmp = N;
    counter = tmp + 1;
    counter += 2;
    console.log(counter);
  }
}*/

let N = Number(prompt('Introduce N: '));

let initialNumber = N;

if (initialNumber % 2 !== 0) {
  //Me aseguro que initialNumber va a ser el primer numero a sumar
  initialNumber = initialNumber + 1;
}

let count = 0;
let sum = 0;

while (count < N) {
  sum = sum + initialNumber;
  console.log(initialNumber);
  initialNumber = initialNumber + 2;
  count = count + 1;
}

console.log('Suma', sum);
