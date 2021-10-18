var prompt = require('prompt-sync')();

const num = parseInt(prompt('Introduzca un número entero: '));

while (num <= 0 || isNaN(num)) {
  num = parseInt(prompt('Introduzca un NÚMERO entero mayor a CERO: '));
}

if (num === 0) {
  console.log('NULO');
} else if (num % 2 === 0) {
  console.log('PAR');
} else {
  console.log('IMPAR');
}
