/*
a) Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales (recuerda usar
   la estructura condicional SI).
b) Ahora con 3 números diferentes
*/
var prompt = require("prompt-sync")();

/*
//Opción A:
const num1 = parseInt(prompt("Introduzca un número: "));
const num2 = parseInt(prompt("Introduzca un segundo número: "));

if (num1 === num2) {
  console.log("Numeros iguales.");
} else if (num1 > num2) {
  console.log(`${num1} es MAYOR que ${num2}`);
} else {
  console.log(`${num1} es MENOR que ${num2}`);
}
*/
//Opción B:
const num1 = parseInt(prompt("1° número: "));
const num2 = parseInt(prompt("2° número: "));
const num3 = parseInt(prompt("3° número: "));

let mayorNum = 0;

if (num1 === num2 && num2 === num3) {
  console.log("Son números iguales.");
} else if (num1 > num2 && num1 > num3) {
  mayorNum = num1;
  console.log("El número 1 es el mayor.");
} else if (num2 > num3) {
  mayorNum = num2;
  console.log("El número 2 es el mayor.");
} else {
  mayorNum = num3;
  console.log("El número 3 es el mayor.");
}

//Opción C: uso de FOR LOOP
// const num1 = parseInt(prompt("1° número: "));
// const num2 = parseInt(prompt("2° número: "));
// const num3 = parseInt(prompt("3° número: "));

// let numArr = [];
// numArr.push(num1, num2, num3);

// let mayorNum = 0;
// for (i = 0; i < numArr.length; i++) {
//   if (numArr[i] > mayorNum) {
//     mayorNum = numArr[i];
//   }
// }
// console.log(numArr);
// console.log(mayorNum);
