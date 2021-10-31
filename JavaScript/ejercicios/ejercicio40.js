/*
Generar un array de 20 elementos con números aleatorios no repetidos entre sí.
*/

function generateRandomArray() {
  let randomArray = [];

  while (randomArray.length < 20) {
    let randomNum = Math.floor(Math.random() * 20 + 1); //Random numbers between 1 and 100
    if (randomArray.includes(randomNum)) {
      generateRandomArray; //Recursion used to generate other random number in case of a coincident one being found in the randomArray.
    } else {
      randomArray.push(randomNum);
    }
  }
  console.log(randomArray);
}
generateRandomArray();
