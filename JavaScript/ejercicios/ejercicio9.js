/*
Construir un algoritmo que dado como datos 5 calificaciones de un alumno imprima el promedio y
la palabra "aprobado" si el alumno tiene un promedio mayor o igual que 5, y la palabra "no
aprobado" en caso contrario
*/
var prompt = require("prompt-sync")();

let notas = [];
const nota1 = parseInt(prompt("Nota Nº1: "));
const nota2 = parseInt(prompt("Nota Nº2: "));
const nota3 = parseInt(prompt("Nota Nº3: "));
const nota4 = parseInt(prompt("Nota Nº4: "));
const nota5 = parseInt(prompt("Nota Nº5: "));

let notasArr = [];
notasArr.push(nota1, nota2, nota3, nota4, nota5);
