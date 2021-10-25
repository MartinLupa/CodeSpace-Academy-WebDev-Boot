<<<<<<< HEAD
var prompt = require("prompt-sync")();
=======
var prompt = require('prompt-sync')();
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
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
<<<<<<< HEAD
let N = parseInt(prompt("Introduce N: "));

//A)
=======
let N = parseInt(prompt('Introduce N: '));

//A)
/*
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
let listA = "";
for (i = 1; i <= N; i++) {
  console.log((listA += i));
}
<<<<<<< HEAD
console.log("------------------");

//B)
for (i = 1; i <= N; i++) {
  let line = i.toString();
  console.log(line.repeat(i));
}
console.log("------------------");

//C)
for (i = 1; i <= N; i++) {}
console.log("------------------");
=======
*/
//B)
let listB = '';
for (i = 1; i <= N; i++) {
  listB = toString(i);
  listB.repeat(i);
  console.log(listB);
}
//C)
/*
for (i = 1; i <= N; i++) {
  console.log((array += i));
}
*/
>>>>>>> a9ade9d7c23b68080731b17d80285d5516ef30c3
