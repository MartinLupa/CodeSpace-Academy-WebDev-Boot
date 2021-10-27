var prompt = require("prompt-sync")();
/*
a)Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
b)Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir 
si el número es mayor o menor que la lectura.
*/

//A)
/*
let userGuess;
let randomNum = Math.floor(Math.random() * 10) + 1;
do {
  userGuess = Number(prompt("Guess the number: "));
} while (randomNum !== userGuess);

if (userGuess === randomNum) {
  console.log(`You guessed. Secret Number is: ${randomNum}`);
}
*/
//B)
let randomNum100 = Math.floor(Math.random() * 100) + 1;
console.log(randomNum100);
do {
  userGuess = Number(prompt("Guess the number: "));
  if (userGuess > randomNum100) {
    console.log("That is too high..");
  } else if (userGuess < randomNum100) {
    console.log("That is too low..");
  } else {
    console.log(`You guessed. Secret Number is: ${randomNum100}`);
  }
} while (randomNum100 !== userGuess);
