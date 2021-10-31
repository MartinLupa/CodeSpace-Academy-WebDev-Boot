var prompt = require('prompt-sync')();
/*
Dados A, B y C que representan a números enteros diferentes, construir 
un algoritmo para escribir estos números de forma descendente.

By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a - b});

*/
const A = parseInt(prompt('Asigne valor a A: '));
const B = parseInt(prompt('Asigne valor a B: '));
const C = parseInt(prompt('Asigne valor a C: '));

const nums = [];
nums.push(A, B, C);

//Option A: with sort()
nums.sort(function (a, b) {
  return b - a;
});
console.log(nums);
