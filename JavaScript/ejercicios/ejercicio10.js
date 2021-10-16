/*
Construír un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de
sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador y
su nuevo sueldo.

Categoría Incremento
   1         15%
   2         10%
   3         6%
   4         3%
*/
var prompt = require('prompt-sync')();

let catTabla = [
  { cat: 1, aum: 0.15 },
  { cat: 2, aum: 0.1 },
  { cat: 3, aum: 0.06 },
  { cat: 4, aum: 0.03 },
];
// ---------------------------------------------------------------------------
// ------------------- OPCION 1: solución con IF STATEMENT -------------------

// --------------------------------------------------------------------------------------------
// ------------------- OPCION 2: solución con FOR LOOP en base a un objeto. -------------------
/*
const categoria = prompt('Ingrese su categoría: ');
const sueldo = parseInt(prompt('Ingrese su sueldo: '));
let nuevoSueldo = 0;
for (let i = 0; i < catTabla.length; i++) {
  if (categoria == catTabla[i].cat) {
    nuevoSueldo = sueldo * (1 + catTabla[i].aum);
    console.log(`Su nuevo sueldo es: ${nuevoSueldo}`);
  }
}
*/

//-------------------------------------------------------------------------------------
// ------------------- OPCION 3: solución con FOR LOOP y funciones. -------------------
//Incorpora validación de categorias de 1 a 4 y repregunta en caso de invalido. Uso de RECURSIÓN.

let categoria = 0;
function preguntaCat() {
  categoria = parseInt(prompt('Ingrese su categoría: '));
  return categoria;
}

let sueldo = 0;
function preguntaSueldo() {
  sueldo = parseInt(prompt('Ingrese su sueldo: '));
  return sueldo;
}

function informaAumento() {
  let nuevoSueldo = 0;
  preguntaCat();
  if (categoria < 1 || categoria > 4) {
    console.log('Por favor ingrese una categoria válida');
    informaAumento(); //Uso de recursión.
  } else {
    preguntaSueldo();
    for (let i = 0; i < catTabla.length; i++) {
      if (categoria === catTabla[i].cat) {
        nuevoSueldo = sueldo * (1 + catTabla[i].aum);
        console.log(`Su nuevo sueldo es: ${nuevoSueldo}`);
      }
    }
  }
}

informaAumento();

//Problemas que tuve: nuevamente el problema de acceso de variables fuera de función.
//Es siempre necesario definir las variables externamente a las funciones para luego ser accesibles dentro de futuras funciones?
//Qué otra solución hay a este problema?
