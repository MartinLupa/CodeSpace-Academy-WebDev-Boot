/*
Construir algoritmo tal que con un número entero como entrada, determine e imprima si es positivo,
negativo o nulo.
*/
const num = parseInt(prompt('Introduzca un número: '));

if (num < 0) {
  console.log('NEGATIVO');
} else if (num === 0) {
  console.log('CERO');
} else {
  console.log('POSITIVO');
}
