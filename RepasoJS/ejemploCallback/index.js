// Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// Sequence Control
// Sometimes you would like to have better control over when to execute a function.

//Esto es una simulación de una llamada a una API.
let data;
setTimeout(function () {
  data = 'ESTA ES LA RESPUESTA DE LA API';
}, 3000);

//-----------------------------------------------------
//Esta función intenta imprimir la data sin esperar la resolución de la API.
function getDataDirectly() {
  console.log('Data sin esperar a la API: ', data);
}
getDataDirectly();

//-----------------------------------------------------
//Esta función espera:
function getDataThroughCallback() {
  console.log('Data esperando a la API: ', data);
}
setTimeout(getDataThroughCallback, 3100);
