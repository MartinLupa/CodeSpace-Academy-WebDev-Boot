/*
Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si no
es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha
cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de
febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch).

OPCION: Introducir control de año bisiesto (leap year).
*/

var prompt = require("prompt-sync")();

let day = parseInt(prompt("Día: "));
let month = parseInt(prompt("Mes: "));
let year = parseInt(prompt("Año: "));
let monthName = "";

while (day <= 0 || day > 31 || month > 12 || year < 1) {
  console.log("Por favor introduce una fecha válida");
  day = parseInt(prompt("Día: "));
  month = parseInt(prompt("Mes: "));
  year = parseInt(prompt("Año: "));
}

switch (month) {
  case 1:
    monthName = "Enero";
    break;
  case 2:
    monthName = "Febrero";
    break;
  case 3:
    monthName = "Marzo";
    break;
  case 4:
    monthName = "Abril";
    break;
  case 5:
    monthName = "Mayo";
    break;
  case 6:
    monthName = "Junio";
    break;
  case 7:
    monthName = "Julio";
    break;
  case 8:
    monthName = "Agosto";
    break;
  case 9:
    monthName = "Septiembre";
    break;
  case 10:
    monthName = "Octubre";
    break;
  case 11:
    monthName = "Noviembre";
    break;
  case 12:
    monthName = "Diciembre";
    break;

  default:
    monthName = "invalid";
    break;
}

console.log(`${day} de ${monthName} de ${year}`);
