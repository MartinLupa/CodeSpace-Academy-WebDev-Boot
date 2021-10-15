// Tipos de datos simples / Data types

// Números / Numbers
number1 = 5;
number2 = 3.1415921;
number3 = -10.5;
number4 = number1 + number3;

//console.log(number1, number2, number3, number4);
//console.log(typeof number1);

//Strings
address = "Calle larios Nº 5";
lastName = "Diaz";
postTitle = "Teletrabajo, ¿sí o no?";
//console.log(`Vivo en la ${address}, y me llamo Fernando ${lastName}.`);

//Boolean (booleanos o lógicos)
isAlive = true;
examPassed = false;

//Variables y constantes (VAR, LET, CONST)
let variable; //DEFINIR UNA VARIABLE.
//let variable = 5; //INICIALIZAR UNA VARIABLE.
const year = 1989; //En el caso de constantes, es obligatorio definir e inicializar al mismo tiempo. Caso contrario genera un error.

//year = 2000; //TypeError: Assignment to constant variable.

//Expresiones lògicas
let p = true;
let q = true;

var prompt = require("prompt-sync")();
//
// get input from the user.
//
var n = prompt("How many more times? ");
