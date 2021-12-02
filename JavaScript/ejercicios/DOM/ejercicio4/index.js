//Crear una tabla que muestre un array de libros guardado en memoria. Requisitos:
//1.Usar estilos de Bootstrap 4. Se puede utilizar el CSS directamente desde el CDN.
//2.Crear un constructor de objeto Book con los siguientes atributos: ID, título, autor, ventas yprecio.
//3.Rellenar un array con 10 libros.
// 4.Para cada elemento del array, tendremos crear una nueva fila en la tabla con las columnas para todas
// las propiedades del objeto además de un botón para poder eliminar el libro.Se aconseja la creación de
// una función para actualizar la tabla (o el tbody) desde cero.
//5.Si el botón de eliminar es pulsado, borrará el libro del array y actualizará la tabla.
//6.Añadir un pequeño formulario después de la tabla para poder anexar un nuevo libro a nuestro array.
//Tras hacer submit, además de añadirlo, deberá actualizar la tabla y vaciar los inputs.

class Book {
  constructor(title, author, sales, price) {
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
    this.id = counter;
    counter++;
  }

  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getSales() {
    return this.sales;
  }
  getPrice() {
    return this.price;
  }
}

const tableContainer = window.document.querySelector('#container');
const buttonAdd = window.document.querySelector('#btnAdd');
const titleInput = window.document.querySelector('#title');
const authorInput = window.document.querySelector('#author');
const salesInput = window.document.querySelector('#sales');
const priceInput = window.document.querySelector('#price');
const filterInput = window.document.querySelector('#search');

let counter = 1;

let bookDB = [];
let filteredBookDB = [];

const book1 = new Book(
  'El señor de los anillos',
  'J. R. Tolkien',
  103000000,
  12
);
const book2 = new Book('El alquimista', 'Paulo Coelho', 400000000, 16);
const book3 = new Book('Harry Potter', 'J. K. Rowling', 65000000, 11.5);

bookDB.push(book1, book2, book3);

window.onload = function () {
  filterInput.addEventListener('keyup', (e) => {
    let searchValue = e.target.value;
    filteredBookDB = bookDB.filter(
      (book) => book.getTitle().indexOf(searchValue) != -1
    );
    updateTable();
  });
  buttonAdd.addEventListener('click', () => {
    bookDB.push(
      new Book(
        titleInput.value,
        authorInput.value,
        salesInput.value,
        priceInput.value
      )
    );
    updateTable();
    clearForm();
  });
  updateTable();
};

function clearForm() {
  titleInput.value = '';
  authorInput.value = '';
  salesInput.value = 0;
  priceInput.value = 0;
}

function updateTable() {
  let html = '';

  filteredBookDB.forEach((book) => {
    html += `<tr>
        <th scope="row">${book.getId()}</th>
        <td>${book.getTitle()}</td>
        <td>${book.getAuthor()}</td>
        <td>${book.getSales()}</td>
        <td>${book.getPrice()}</td>
        <td><button onclick="eliminateBook2('${book.getId()}')" class="btn btn-danger">Delete</button></td>
        </tr>`;
  });
  tableContainer.innerHTML = html;
}

//Manera 2
function eliminateBook2(id) {
  bookDB = bookDB.filter((book) => book.id != id);
  updateTable();
}

//Manera 1
function eliminateBook(id) {
  let bookToDelete = bookDB.find((book) => book.id == id);
  let indexToDelete = bookDB.indexOf(bookToDelete);
  bookDB.splice(indexToDelete, 1);

  updateTable();
}

//Crear una tabla que muestre un array de libros guardado en memoria. Requisitos:
//1.Usar estilos de Bootstrap 4. Se puede utilizar el CSS directamente desde el CDN.
//2.Crear un constructor de objeto Book con los siguientes atributos: ID, título, autor, ventas yprecio.
//3.Rellenar un array con 10 libros.
// 4.Para cada elemento del array, tendremos crear una nueva fila en la tabla con las columnas para todas
// las propiedades del objeto además de un botón para poder eliminar el libro.Se aconseja la creación de
// una función para actualizar la tabla (o el tbody) desde cero.
//5.Si el botón de eliminar es pulsado, borrará el libro del array y actualizará la tabla.
//6.Añadir un pequeño formulario después de la tabla para poder anexar un nuevo libro a nuestro array.
//Tras hacer submit, además de añadirlo, deberá actualizar la tabla y vaciar los inputs.

// class Book {
// constructor(title, author, sales, price) {
// this.title = title;
// this.author = author;
// this.sales = sales;
// this.price = price;
// this.id = counter;
// counter++;
// }
//
//
//
//
//
// getId() {
// return this.id;
// }
// getTitle() {
// return this.title;
// }
// getAuthor() {
// return this.author;
// }
// getSales() {
// return this.sales;
// }
// getPrice() {
// return this.price;
// }
// }
//
//
//
//
//
// const tableContainer = window.document.querySelector("#container");
// const buttonAdd = window.document.querySelector("#btnAdd");
// const titleInput = window.document.querySelector("#title");
// const authorInput = window.document.querySelector("#author");
// const salesInput = window.document.querySelector("#sales");
// const priceInput = window.document.querySelector("#price");
//
//
//
// const filterInput = window.document.querySelector('#search');
//
//
//
//
//
// let counter = 1;
//
//
//
//
//
// let bookDB = []; //
// let filteredBookDB = [];
//
//
//
//
//
// const book1 = new Book(
// "El señor de los anillos",
// "J. R. Tolkien",
// 103000000,
// 12
// );
// const book2 = new Book("El alquimista", "Paulo Coelho", 400000000, 16);
// const book3 = new Book("Harry Potter", "J. K. Rowling", 65000000, 11.5);
// const book4 = new Book("El señor de las moscas", "Miguel", 1, 0)
//
//
//
//
// bookDB.push(book1, book2, book3, book4);
//
//
//
//
// window.onload = function () {
// filterInput.addEventListener('keyup', (e) => {
// filteredBookDB = bookDB.filter((book) =>
// book.getTitle().indexOf(e.target.value) != -1
// )
// updateTable();
// })
//
//
//
//
// buttonAdd.addEventListener("click", () => {
// bookDB.push(
// new Book(
// titleInput.value,
// authorInput.value,
// salesInput.value,
// priceInput.value
// )
// );
// updateTable();
// clearForm();
// });
// updateTable();
// };
//
//
//
//
//
// function clearForm() {
// titleInput.value = "";
// authorInput.value = "";
// salesInput.value = 0;
// priceInput.value = 0;
// }
//
//
//
//
//
// function updateTable() {
// let html = "";
// filteredBookDB.forEach((book) => {
// html += `<tr>
//   <th scope="row">${book.getId()}</th>
//   <td>${book.getTitle()}</td>
//   <td>${book.getAuthor()}</td>
//   <td>${book.getSales()}</td>
//   <td>${book.getPrice()}</td>
//   <td><button onclick="eliminateBook2('${book.getId()}')" class="btn btn-danger">Delete</button></td>
//   </tr>`;
// });
// tableContainer.innerHTML = html;
// }
//
//
//
//
//
// //Manera 2
// function eliminateBook2(id) {
// bookDB = bookDB.filter((book) => book.id != id);
// updateTable();
// }
//
//
//
//
//
// //Manera 1
// function eliminateBook(id) {
// let bookToDelete = bookDB.find((book) => book.id == id);
// let indexToDelete = bookDB.indexOf(bookToDelete);
// bookDB.splice(indexToDelete, 1);
//
//
//
//
//
// updateTable();
// }
