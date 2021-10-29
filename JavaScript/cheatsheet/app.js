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

//--------------------------------------------------------------------------------------------------
//FUNCIONES
/*
Valor vs referencia: https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

Undefined vs Null: In JavaScript, undefined is a type, whereas null an object. It means a variable declared, 
but no value has been assigned a value. Whereas, null in JavaScript is an assignment value. You can assign it to a variable.

//Inmutabilidad de datos: https://www.todojs.com/datos-inmutables-en-javascript/

*/
//Tipos de datos

// undefined, una variable cuyo valor no ha sido definida.
let username;
console.log(typeof username); //undefined

// null, tiene valor de "nada".
let age = null;
console.log(typeof age); //null

//BigInt
let z = 3n ** 5n;
console.log(typeof z); //bigint

//VARIABLES TIPO OBJETO
//Array)
let cars = ["Ford", "Mercedes", "Chevrolet"];
console.log(typeof cars); //Object

//Objetos)
let car = {
  marca: "Ford",
  modelo: "Mustang",
};

//Syntaxis de funciones
//Declaración de funciones
function saludar() {}
//Expresiòn de funciones
const sumar = function (a, b) {};
//Funcion de flecha
const sumar = () => {};

//PASO POR VALOR
//                             Nombre       Posición memoria         Valor
let color = "rosa"; //---------color            A12345              "rosa"
let username = color; //-------username         B78548              "rosa"

color = "celeste"; //----------username         A12345(=)           "celeste"

//PASO POR REFERENCIA
//                             Nombre       Posición memoria          Valor
const array = [2, 3, 4]; //----array            A929292             [2, 3, 4]
const array2 = array; //-------array2           A929292             [2, 3, 4]

array.pop();

console.log(array); //---------array            A929292             [2, 3]
console.log(array2); //--------array2           A929292             [2, 3]

const user1 = {
  name: "Martín",
  age: 32,
};
const user2 = user1;

console.log(user1); // {name: "Martín", age: 32}
console.log(user2); // {name: "Martín", age: 32}

function changeAge(user) {
  let result = (user.age = 60);
  return result;
}
changeAge(user1);

console.log(user1); // {name: "Martín", age: 60}
console.log(user2); // {name: "Martín", age: 60}
