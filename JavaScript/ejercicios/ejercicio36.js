/*
Crear dos arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20. 
Imprimir índice y el resultado de la multiplicación de ambos elementos de los arraysdel 
índice de cada iteración. Cuidado con los elementos del array sin inicializar.
*/

let array1 = new Array(10);
let array2 = new Array(10);

for (i = 0; i < array1.length; i++) {
  let randomNum = Math.floor(Math.random() * 20) + 1;
  array1[i] = randomNum;
}
for (j = 0; j < array2.length; j++) {
  let randomNum = Math.floor(Math.random() * 20) + 1;
  array2[j] = randomNum;
}

console.log("Array 1", array1);
console.log("Array 2", array2);
