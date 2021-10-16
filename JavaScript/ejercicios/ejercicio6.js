/*
Dado un número entero A, hacer un algoritmo que determine si es par, impar o nulo.
Pista: para determinar el resto de una división, se usa la operación módulo %
*/
const num = parseInt(prompt('Introduzca un núumero: '));
if (num === 0) {
  console.log('NULO');
} else if (num % 2 === 0) {
  console.log('PAR');
} else {
  console.log('IMPAR');
}
