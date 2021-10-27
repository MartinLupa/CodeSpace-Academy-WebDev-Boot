var prompt = require("prompt-sync")();
/*
Crear un array de números donde le indicaremos el tamaño por teclado. 
Rellenará cada elemento con números aleatorios entre 0 y 9. 
Posteriormente, mostrará por pantalla el valor de cada posición junto 
con su índice y finalmente, la suma de todos los valores.
*/

const array = [];
let counter = 0;
const size = Number(prompt("Introduce array size: "));

//Pushes random values to the empty array.
for (i = 0; i < size; i++) {
  let randomNum = Math.floor(Math.random() * size) + 1;
  array.push(randomNum);
}

//Prints the ending array, the index and values, and the total sum of each value.
console.log(array);
for (j = 0; j < size; j++) {
  counter += array[j];
  console.log(`Index: ${j}, Value: ${array[j]}`);
}
console.log(`Total is: ${counter}`);

let randomNumX = Math.floor(Math.random() * (10 - 1) + 1);
console.log(randomNumX);
