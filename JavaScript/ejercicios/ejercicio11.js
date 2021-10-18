/*
En una tienda efectúan un descuento a los clientes dependiendo de la cantidad de la compra. El descuento se basa en:
Si el monto es menor que 500EUR: no hay descuento.
Si el monto está comprendido entre 500 y 1000 EUR inclusive: 5% descuento.
Si el monto está entre 1000 y 7000EUR inclusive: 10% descuento.
Si el monto está entre 7000 y 15000EUR inclusive: 20% descuento.
Más de 15000EUR: 25% descuento.

Imprimir el precio final.
*/

var prompt = require('prompt-sync')();

let purchaseAmount = parseInt(
  prompt('Please insert the value of the purchase: ')
);
let finalPrice = 0;
if (purchaseAmount <= 500) {
  console.log(`No discount for this amount. Final price: ${purchaseAmount}`);
} else if (purchaseAmount > 500 && purchaseAmount <= 1000) {
  finalPrice = purchaseAmount * 0.95;
  console.log(`5% discount. Final price of: ${finalPrice}`);
} else if (purchaseAmount > 1000 && purchaseAmount <= 7000) {
  finalPrice = purchaseAmount * 0.9;
  console.log(`10% discount. Final price of: ${finalPrice}`);
} else if (purchaseAmount > 7000 && purchaseAmount <= 15000) {
  finalPrice = purchaseAmount * 0.8;
  console.log(`20% discount. Final price of: ${finalPrice}`);
} else if (purchaseAmount > 15000) {
  finalPrice = purchaseAmount * 0.75;
  console.log(`25% discount. Final price of: ${finalPrice}`);
}
