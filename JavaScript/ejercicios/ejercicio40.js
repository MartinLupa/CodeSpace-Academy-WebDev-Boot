/*
Generar un array de 20 elementos con números aleatorios no repetidos entre sí.
*/
//No funciona
let array = [];

while (array.length < 20) {
  let randomNum = Math.floor(Math.random() * 20) + 1;
  array.push(randomNum);
  if (array.find((element) => element == randomNum)) {
    randomNum = Math.floor(Math.random() * 20) + 1;
    array[array.length - 1] = randomNum;
  }
}
console.log(array);
