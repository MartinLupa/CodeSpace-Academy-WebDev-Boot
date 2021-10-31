/*
Dados un array de 5 elementos con números aleatorios del 1 al 100. Imprimir el estado inicial del array, ordenarlo de forma ascendente y volver a imprimir el nuevo estado.

https://careerkarma.com/blog/javascript-bubble-sort/
*/

const array = [];

while (array.length < 5) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  array.push(randomNum);
}
console.log('Original array: ', array);

const orderedArray = array.sort(function (a, b) {
  return a - b;
});

console.log('Ordered array: ', orderedArray);
