var prompt = require('prompt-sync')();
/*
Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. 
Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
Nota: deberás utilizar “Esperar” y “Limpiar pantalla”.
*/

// Ejercicio28
// const timer = setInterval(function () {
//   if (time === 0) {
//     clearInterval(timer);
//     console.log("Ring");
//   } else if (time === 1) {
//     console.log(`${time} segundo restante.`);
//     time--;
//   } else {
//     console.log(`${time} segundos restantes.`);
//     time--;
//   }
// }, 1000);

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

// function clock() {
//   setInterval(function () {
//     //Seconds counter
//     let seconds = 0;
//     seconds = setInterval(function () {
//       if (seconds < 60) {
//         return seconds++;
//       } else {
//         return (seconds = 0);
//       }
//     }, 0);

//     //Minutes counter
//     let minutes = 0;
//     setInterval(function () {
//       if (minutes < 60) {
//         return minutes++;
//       } else {
//         return (minutes = 0);
//       }
//     }, 60000);

//     //Hours counter
//     let hours = 0;
//     setInterval(function () {
//       if (hours <= 24) {
//         return hours++;
//       } else {
//         return (hours = 0);
//       }
//     }, 1000 * 3600);
//     console.log(`The time is: ${hours}:${minutes}:${seconds}`);
//   }, 1000);
// }
// //clock();
