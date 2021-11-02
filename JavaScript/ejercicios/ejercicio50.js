var prompt = require('prompt-sync')();
/*
Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.
*/
const phrase = prompt('Introduzca una frase: ');
const char = prompt('Introduzca la letra a contar: ');
let counter = 0;
for (i = 0; i < phrase.length; i++) {
  if (phrase[i] == char) {
    counter++;
  }
}
console.log(`La letra "${char}" se repite ${counter} veces.`);
