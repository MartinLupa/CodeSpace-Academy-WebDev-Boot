var prompt = require("prompt-sync")();
/*
Crear un array de tamaño 10 y que guardará números enteros introducidos por teclado.
Tras introducirlos todos, imprimirá cada índice junto con el valor al que corresponda.
*/
const array = [];
const size = 10;
//First for loop adds each number to the array with the push() method.
for (let i = 1; i <= size; i++) {
  let number = prompt(`Introduce the ${i}º number: `);
  array.push(number);
  console.log(array.length);
}
//Console log´s each Index and the correspondent number.
for (let j = 1; j < array.length; j++) {
  console.log(`Index: ${j} - Num: ${array[j]}`);
}
