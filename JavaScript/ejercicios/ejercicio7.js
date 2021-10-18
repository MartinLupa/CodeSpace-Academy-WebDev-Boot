/*
Construir un algoritmo que dado el coste de un artículo vendido y la cantidad de dinero entregado,
calcule e imprima el cambio que se debe entregar al cliente.
*/

var prompt = require("prompt-sync")();

// Definición de stock de productos:
const productos = [
  { prod: "manzana", precio: 2 },
  { prod: "banana", precio: 1.5 },
  { prod: "pera", precio: 1 },
  { prod: "mango", precio: 3 },
];

//Informa al cliente de los productos y precios:
function imprimeProd() {
  for (i = 0; i < productos.length; i++) {
    console.log(
      `Producto ${i + 1}: ${productos[i].prod} - Precio: $ ${
        productos[i].precio
      }.`
    );
  }
}

let pedidoProd = "";
//Pregunta al cliente producto a comprar y cantidad:
function tomaPedidoProd() {
  pedidoProd = prompt(
    "Qué producto quisiera comprar(manzana, banana, pera o mango)?: "
  );
  return pedidoProd;
}

let pedidoCant = 0;
function tomaPedidoCant() {
  pedidoCant = prompt("Cuántos Kgs.? ");
  return pedidoCant;
}

//Informa al cliente costo total de la compra:
let costo = 0;
function costoTotal() {
  for (i = 0; i < productos.length; i++) {
    if (pedidoProd === productos[i].prod) {
      costo = parseInt(productos[i].precio * pedidoCant);
      console.log(`El total es: $ ${costo}`);
    }
  }
  return costo;
}

//Pregunta al cliente valor con el que abona e informa del remanente a devolver o del faltante:

let valorRecibido = 0;
function pago() {
  valorRecibido = parseInt(prompt("Con cuánto desea abonar? "));

  if (valorRecibido === costo) {
    console.log("Pago justo. Gracias por su compra!");
  } else if (valorRecibido < costo) {
    console.log(`El total es: $ ${costo}, faltan $ ${costo - valorRecibido}`);
    pago();
  } else {
    console.log(
      `Su vuelto es de: $ ${valorRecibido - costo}. Gracias por su compra!`
    );
  }
}

//Proceso de compra completo:
function realizaPedido() {
  imprimeProd();
  tomaPedidoProd();
  tomaPedidoCant();
  costoTotal();
  pago();
}
realizaPedido();

//Problemas que tuve:
/*
Algunas variables no eran accesibles para funciones que las requerían(block scope). Solución: inicializarlas externamente con valor 0 o "".
Recordar usar return para que el valor definido dentro de la función para X variable, sea accesible desde afuera. Es decir, si yo defino
una variable fuera de la función, esa variable no va a ser actualizada (no va a tomar el valor que le asigna la función), a menos que yo 
use return dentro de dicha función.
*/
