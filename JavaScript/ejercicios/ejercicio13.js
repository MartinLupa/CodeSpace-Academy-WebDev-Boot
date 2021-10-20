/*
Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro 
y la superficie del mismo.Superficie= base*alturaPerímetro = 2*(base + altura)Comprobar los resultados con 
varios datos de entradas diferentes.
*/

var prompt = require("prompt-sync")();

const base = parseInt(prompt("Base (en cm): "));
const height = parseInt(prompt("Base (en cm): "));

const surface = base * height;
const perimeter = 2 * (base + height);

console.log(`Surface is: ${surface}cm.`);
console.log(`Perimeter is: ${perimeter}cm.`);
