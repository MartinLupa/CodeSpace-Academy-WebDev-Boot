//1. Partimos de un HTML con un div vacío. Con JS, añadir dos elementos p con un texto dentro.
const wrapper = document.querySelector('#wrapper');

const p1 = document.createElement('p');
p1.textContent = 'Hola, soy un parrafo.';
wrapper.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = 'Hola, yo también soy un parrafo.';
wrapper.appendChild(p2);

// 2. Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML
const btn1 = document.createElement('button');
btn1.textContent = 'Botón';
wrapper.appendChild(btn1);

btn1.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

/*3. Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. Al hacer click en cada URL,
cambiará la imagen a la que contenga dicha URL.*/
const imagesUl = document.querySelector('#images-ul');

imagesUl.addEventListener('click', (e) => {
  const image = document.querySelector('#image');
  //Prevents refresh on submition
  e.preventDefault();
  //Event capture
  let url = e.target.href;
  //Setting attribute
  image.setAttribute('src', url);
});

//4. Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.
const btn2 = document.querySelector('#btn2');
const input = document.querySelector('#textInput');
const wrapper2 = document.querySelector('#wrapper2');
btn2.addEventListener('click', () => {
  const textToPrint = input.value;
  const p3 = document.createElement('p');
  p3.innerText = textToPrint;
  wrapper2.appendChild(p3);
});
//5. Similar al anterior, pero será para un textarea y validará si lo introducido es mayor de 15 caracteres
/*6. Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón
nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.
Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío. */
//7. Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento (“Elemento X”) usando un bucle for
/*8.Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el
botón y luego el enlace, se me abre en una nueva pestaña. */
const link = document.createElement('a');
link.innerText = 'Enlace';
link.classList.add('src');

/*9. Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al
seleccionar un color del select, cambiar el color del párrafo. */

/*10.. Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualiza el número
de elementos que se han generado, los que son pares y los que son impare*/
/*11.Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. Al pulsar
el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al principio.*/
/*12. Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. Al hacer click en el botón haremos
“toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos.*/

/*
El código siguiente, añade un eventListener a cada botón para que cuando se haga click en cada uno de ellos,
le cambie el backgroundColor. Refactorizar el código para hacerlo con un único forEach.
Nota:
1. Para transformar un HTMLCollection a un array, podemos hacer:
Array.from(HTMLCollection);
2. Para acceder al elemento que “disparó” el evento, podemos usar evento.target.
*/
const buttons = document.getElementsByClassName('btn');

const btnArray = Array.from(buttons);

btnArray.forEach((element) =>
  element.addEventListener('click', (e) => {
    const btn = e.target;
    btn.style.backgroundColor = 'red';
  })
);
