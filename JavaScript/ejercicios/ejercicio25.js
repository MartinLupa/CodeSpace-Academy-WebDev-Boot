var prompt = require('prompt-sync')();

let lado = parseInt(prompt('Largo de lados: '));
let unit = '*';
let space = ' ';

console.log(unit.repeat(lado));

for (j = 0; j < lado - 2; j++) {
  console.log(unit, space.repeat(lado - 4), unit);
}
console.log(unit.repeat(lado));
