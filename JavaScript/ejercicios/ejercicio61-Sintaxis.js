//1. Define e inicializa un array con 5 elementos string en una sola línea.
const testArray = ['apples', 'oranges', 'bananas', 'mangos', 'tomatoes'];

//2. Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente.

const emptyArray = new Array();
emptyArray.push(1, 2, 3);
// console.log(emptyArray, `Longitud: ${emptyArray.length}`);

//Elimina por completo el primero y añade dos nuevos números al inicio. En cada paso, imprime
//la longitud y el arrayentero por consola utilizando un string template del tipo: `Longitud: ${}`.
emptyArray.shift();
// console.log(emptyArray, `Longitud: ${emptyArray.length}`);

emptyArray.unshift(0, 0);
// console.log(emptyArray, `Longitud: ${emptyArray.length}`);

//3. Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en caso contrario.

function booleanDetect(input) {
  if (typeof input === 'boolean') {
    console.log(true);
    return true;
  } else {
    return false;
  }
}
// booleanDetect(true);

//4. Escribe una función que devuelva la longitud de un string recibido por argumento.
function stringLength(str) {
  console.log(str.length);
}
// stringLength('hola');

//5. Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.
const seconds = (min) => {
  return min * 60;
};
// console.log(seconds(1));

//6. Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá directamente).
function printNextEven(num) {
  if (num % 2 === 0) {
    console.log(num + 2);
  } else {
    console.log(num + 1);
  }
}
// printNextEven(5);

//7. Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes obviar los años bisiestos.
const yearsInDays = (age) => {
  console.log(age * 365);
};

// console.log(yearsInDays(32));

//8. Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays de diferentes longitudes.
function returnLast(arr) {
  console.log(arr[arr.length - 1]);
}
// returnLast(testArray);

//9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy frecuentemente,
//pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas).
//Tu función recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. Ejemplo: countLegs(5, 2, 8); // output: 50
function countLegs(chickens, cows, pigs) {
  const legs = chickens * 2 + cows * 4 + pigs * 4;
  console.log(legs);
}
// countLegs(2, 2, 2);

//10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.
function checkType(arg1, arg2) {
  if (typeof arg1 === typeof arg2) {
    console.log('Same type.');
  } else {
    console.log(
      `${arg1} is of type ${typeof arg1}, while ${arg2} is of type ${typeof arg2}.`
    );
  }
}
// checkType(1, 'l');

//11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin.
function convertToArr(str) {
  const wordsArr = str.split(' ');
  console.log(wordsArr);
}
// convertToArr('Hola mi nombre es Martin');

//12. Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta, y número de puerta.
// const address1 = new Object(
//   provincia,
//   ciudad,
//   municipio,
//   codigoPostal,
//   calle,
//   numero,
//   planta,
//   numeroDePuerta
// );
// const address2 = new Object(
//   provincia,
//   ciudad,
//   municipio,
//   codigoPostal,
//   calle,
//   numero,
//   planta,
//   numeroDePuerta
// );

//13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como,
//por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
//reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:
function parseDomain(url) {
  const splitUrl = url.split('.');
  console.log({ domain: splitUrl[0], TLD: splitUrl[1] });
}
//parseDomain('codespaceacademy.com');

//14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
//esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:
//strictEquality("5", 5); // false
//strictEquality(5, 5); // true
function strictEquality(arg1, arg2) {
  if (typeof arg1 == typeof arg2 && arg1 == arg2) {
    console.log('Equal type and value');
  } else if (arg1 == arg2) {
    console.log('Equal value only, but different type.');
  } else {
    console.log('Not equal');
  }
}
//strictEquality(5, 5);

//15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso contrario.
function equalLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

// 16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

// 17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:

// • while
//let i = 0;
// while (i < testArray.length) {
//   console.log(testArray[i]);
//   i++;
// }

// • for
// for (i = 0; i < testArray.length; i++) {
//   console.log(testArray[i]);
// }

// • for of
// for (item of testArray) {
//   console.log(item);
// }

// • forEach.
//testArray.forEach((element) => console.log(element));

// 18. Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.
// repeatString("No haré memes sobre el profesor. ", 2);
// output: ”No haré memes sobre el profesor. No haré memes sobre el profesor. ”
const repeatArray = (str, N) => {
  let repeated = [];
  for (i = 0; i < N; i++) {
    repeated += str;
  }
  return repeated;
};
//console.log(repeatArray('No haré memes sobre el profesor. ', 2));

// 19. Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva la cuenta final.
// getVoteCount({upVotes: 35, downVotes: 15}); // 20
const getVoteCount = (positiveVotes, negativeVotes) => {
  let voteCount = positiveVotes - negativeVotes;
  return voteCount;
};
//console.log(getVoteCount(35, 15));

// 20. Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo de cada uno de los elementos.
// getTypes(["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"]);
// output ["string", "number", "object", "number", "undefined", "object", "string"];

const getTypes = (array) => {
  const typesArr = [];
  array.forEach((element) => typesArr.push(typeof element));
  return typesArr;
};
/*console.log(
  getTypes([
    "I'm learning JS in a Bootcamp 🚀",
    7.5,
    {},
    0,
    undefined,
    [],
    'codespace',
  ])
);*/
// 21. Función que dado un array de números con formato string devuelva un array con los números ya parseados.
// getParsedNumbers(["1.5", "10", "0"]); // output: [1.5, 10, 0];

const getParsedNumbers = (arr) => {
  let parsedArr = [];
  //Usar parseInt suprime decimales.
  arr.forEach((element) => parsedArr.push(parseFloat(element)));
  return parsedArr;
};
//console.log(getParsedNumbers(['1.5', '10', '0']));

// 22. Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
// igual que cero y “Negativo” en caso contrario. Usa el operador ternario.
const isPositive = (num) => {
  return num >= 0 ? 'Positivo' : 'Negativo';
};
//console.log(isPositive(19));

// 23. Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.
const eraseValue = (arr, index) => {
  arr.splice(index, 1);
  return arr;
};
//console.log(eraseValue([1, 5, 6, 7, 5], 4));

// 24. Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
// filtrar, devuelva un array borrando todos las apariciones de dicho número.
// filterNumber([1, 5, 6, 7, 5], 5); // output: [1, 6, 7]
const filterNumber = (arr, value) => {
  for (i = 0; i < arr.length; i++) {
    if (value == arr[i]) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
//console.log(filterNumber([1, 5, 6, 7, 5], 5));

// 25. Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
// propiedades. La segunda devolverá un array con los valores de dichas propiedades.
// Investigar los métodos keys y values del prototipo de Object.
const testObject = {
  name: 'Martín',
  age: 32,
};
const objectKeys = (obj) => {
  let objectKeys = [];
  Object.keys(obj).forEach((key) => objectKeys.push(key));

  return objectKeys;
};
//console.log(objectKeys(testObject));

const objectValues = (obj) => {
  let objectValues = [];
  Object.values(obj).forEach((value) => objectValues.push(value));
  return objectValues;
};
//console.log(objectValues(testObject));

// 26. Crea una función que invierta un string.
// stringReverse('.nóicamargorp ed sedrat sal ne llub der led érasuba oN');
// output: No abusaré del red bull en las tardes de programación.
const stringReverse = (str) => {
  let reversedString = '';
  for (i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

// console.log(
//   stringReverse('.nóicamargorp ed sedrat sal ne llub der led érasuba oN')
// );
//---------------------Otra solución para invertir un string -------------------------------
const stringReverse2 = (str) => {
  let splitString = str.split('');
  let reverseString = splitString.reverse();
  let newArr = reverseString.join('');
  return newArr;
};
// console.log(
//   stringReverse2('.nóicamargorp ed sedrat sal ne llub der led érasuba oN')
// );

// 27. Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.
// compareStrings('Darth CODER', 'darth coder'); // output: true
const compareStrings = (str1, str2) => {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
};
//compareStrings('Darth CODER', 'darth coder');

// 28. Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
// apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.
// capitalize("comprobaré los errores de la consola antes de pedir ayuda.");
// output: "Comprobaré Los Errores De La Consola Antes De Pedir Ayuda."
const capitalize = (str) => {
  let splitArray = str.split(' ');
  let capitalized = [];
  for (word of splitArray) {
    capitalized += word[0].toUpperCase() + word.slice(1) + ' ';
  }
  console.log(capitalized);
};
//capitalize('comprobaré los errores de la consola antes de pedir ayuda.');

// 29. Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.
const oposite = (value) => !value;
//console.log(oposite(true));
