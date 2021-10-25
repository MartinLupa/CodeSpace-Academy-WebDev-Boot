var prompt = require("prompt-sync")();
/*
Desarrollar una calculadora de factoriales para números introducidos por teclado.
El factorial de un número N es la multiplicación de todos los números desde 1 
hasta N. Es decir, para N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120
*/
let N = parseInt(prompt("Introduce N para calcular su factorial: "));
let factorial = N;
for (i = N - 1; i >= 1; i--) {
  factorial *= i;
}
console.log(`El factorial de ${N} es: ${factorial}`);
