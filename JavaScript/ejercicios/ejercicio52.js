var prompt = require("prompt-sync")();
/*
Rellenar un array con 10 números aleatorios entre 1 y 15. 
Posteriormente, buscar un número introducido por teclado y nos debe decir 
si está incluido en el array y el índice de su primera coincidencia. 
*/

//Create array of length 10 with random numbers from 1 to 15.
const array = [];
for (i = 0; i < 10; i++) {
  let randomNum = Math.floor(Math.random() * 15) + 1;
  array.push(randomNum);
}
console.log(array);

do {
  //Checks if number is inside the array.
  let N = parseInt(prompt("Introduce N: "));

  for (j = 0; j < array.length; j++) {
    if (array[j] == N) {
      console.log(`${N} is in the array in the index: ${j}`);
      return false;
    }
  }
  //This log only executes when if is truthy so false is returned and stops the execution of the for.
  //Otherwise it will always return to the beginning of the do.
  console.log(`${N} is not in the array. Try another number.`);
} while (!false);
