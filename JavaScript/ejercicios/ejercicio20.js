/*
Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo
tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos
que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.
*/
var prompt = require("prompt-sync")();

const KEY = "eureka";
let typedKey = prompt("Introduce the key: ");
let count = 3;

while (KEY !== typedKey && count > 1) {
  count -= 1;
  console.log("Invalid key");
  console.log(`You have ${count} tries left.`);
  typedKey = prompt("Introduce the key: ");
}
if (KEY === typedKey) {
  console.log("Valid key. Welcome!");
} else {
  console.log("Key blocked. Contact an administrator.");
}
