/* 
Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo, debe imprimir el
producto de los tres y si no lo es, imprimirá la suma.
*/
const num1 = parseInt(prompt('Ingrese un número: '));
const num2 = parseInt(prompt('Ingrese otro número: '));
const num3 = parseInt(prompt('Ingrese último número: '));

if (num1 < 0) {
  console.log(num1 * num2 * num3);
} else {
  console.log(num1 + num2 + num3);
}
