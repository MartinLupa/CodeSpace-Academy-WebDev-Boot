/*
a) Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales (recuerda usar
   la estructura condicional SI).
b) Ahora con 3 números diferentes
*/

//Opción A:
const num1 = parseInt(prompt('Introduzca un número: '));
const num2 = parseInt(prompt('Introduzca un segundo número: '));

if (num1 === num2) {
  console.log('Numeros iguales.');
} else if (num1 > num2) {
  console.log(`${num1} es MAYOR que ${num2}`);
} else {
  console.log(`${num1} es MENOR que ${num2}`);
}

//Opción B:
const num1 = parseInt(prompt('1° número: '));
const num2 = parseInt(prompt('2° número: '));
const num3 = parseInt(prompt('3° número: '));
