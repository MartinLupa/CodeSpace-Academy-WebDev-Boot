/*
Construir un algoritmo que te permita calcular la temperatura teniendo en cuenta el número de sonidos emitidos por un grillo 
en un minuto, es una función que depende de la temperatura. Como resultado de esto, es posible determinar el nivel de 
temperatura haciendo uso de un grillo como termómetro.La fórmula es:T = N / 4 + 40, donde T es la temperatura en grados 
centígrados y N es el número de sonidos emitidos por minuto.Como el aparato para medir los sonidos puede fallar, hay que 
tener en cuenta que si el número de sonidos es 0, es un error y debe de imprimir “error”.
*/

var prompt = require("prompt-sync")();

const soundsPerMin = parseInt(prompt("Recorded sounds per minute: "));

const temperatureCalc = soundsPerMin / 4 + 40;

if (soundsPerMin === 0) {
  console.log("Cricket is dead 💀");
} else {
  console.log("Good news! Cricket is alive and happy.");
  console.log(`Estimated temperature is: ${temperatureCalc}° Celsius.`);
}
