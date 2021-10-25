var prompt = require("prompt-sync")();

/*
let lado = parseInt(prompt("Largo de lados: "));
let unit = "*";
let space = " ";

console.log(unit.repeat(lado));
for (i = 0; i < lado - 2; i++) {
  console.log(unit, space.repeat(lado - 4), unit);
}
console.log(unit.repeat(lado));
*/

let N = parseInt(prompt("Largo de lados: "));

for (let row = 1; row <= N; row++) {
  let line = "";
  for (let column = 1; column <= N; column++) {
    if (row === 1 || row === N || column === 1 || column === N) {
      line = line + "*";
    } else {
      line = line + " ";
    }
  }
  console.log(line);
}
