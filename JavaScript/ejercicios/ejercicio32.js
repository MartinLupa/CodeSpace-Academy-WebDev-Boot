var prompt = require('prompt-sync')();
/*
El siguiente es el menú de un restaurante de bocadillos. Diseñar un algoritmo capaz de leer 
el número de unidades consumidas de cada alimento ordenado y calcular la cuenta total. 
Vamos a suponer que estos precios son fijos, es decir, que son constantes (recuerda que en
PSeInt no se usa comas para separar la parte decimal de la parte entera).

PROD                    PRECIO  
Bocadillo de Jamón       1.5
Refresco                 1.05
Cerveza                  0.75
Pan                      2.00
*/
//OPTION A: with two different arrays. One for product, other for price.
let product = ['Bocadillo de jamón', 'Refresco', 'Cerveza', 'Pan'];
let price = [1.5, 1.05, 0.75, 2];
let totalAmount = 0;

for (i = 0; i < product.length; i++) {
  let consumed = Number(prompt(`Unidades consumidas de ${product[i]}: `));
  totalAmount += price[i] * consumed;
}

console.log(`The total is: $${totalAmount}`);

//OPTION B: with an object of products.
const menu = [
  { prod: 'sandwich', price: 1.5 },
  { prod: 'soda', price: 1.05 },
  { prod: 'beer', price: 0.75 },
  { prod: 'bread', price: 2 },
];
