var prompt = require('prompt-sync')();
/*
Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. 
Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
Nota: deberás utilizar “Esperar” y “Limpiar pantalla”.
*/

function clock() {
  setInterval(function () {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    console.log(`${hours}:${minutes}:${seconds}`);
    setInterval(function () {
      console.clear();
    }, 1000);
  }, 1000);
}
clock();
