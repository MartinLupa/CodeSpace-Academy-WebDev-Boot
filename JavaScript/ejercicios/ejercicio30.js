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
/*
let listA = "";
for (i = 1; i <= N; i++) {
  console.log((listA += i));
}
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
