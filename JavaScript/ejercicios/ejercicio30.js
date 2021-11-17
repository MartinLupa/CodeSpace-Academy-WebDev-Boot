var prompt = require('prompt-sync')();
/*
Escribir un algoritmo que muestre por pantalla un triángulo como los siguientes hasta un número
 de filas introducido por teclado.
 a)Para filas = 4
 1
 12
 123
 1234

 b)Para filas = 4
 1
 22
 333
 4444

 c)Para filas = 4
 1
 23
 456
 78910
*/
let N = parseInt(prompt('Introduce N: '));

//A)
let listA = '';
for (i = 1; i <= N; i++) {
  console.log((listA += i));
}
console.log('------------------');

//B)
//Opcion1
// for (i = 1; i <= N; i++) {
//   let line = i.toString();
//   console.log(line.repeat(i));
// }

//Opcion2
// for (let row = 1; row <= N; row++) {
//   let line = '';
//   for (let column = 1; column <= row; column++) {
//     line += row;
//   }
//   console.log(line);
// }
// console.log('------------------');

//C)
// for (i = 1; i <= N; i++) {}

// let count = 1;
// for (let row = 1; row <= N; row++) {
//   let line = '';
//   for (let column = 1; column <= row; column++) {
//     line += count + ' ';
//     count++;
//   }
//   console.log(line);
// }
// console.log('------------------');
