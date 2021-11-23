/*
Vamos a crear una lista que muestre toda la información de un usuario. Habrá un selector para poder
elegir los diferentes usuarios que tenemos guardados en un array. Al seleccionar uno diferente
actualizará la lista para mostrar la información del usuario que esté seleccionado.
Los usuarios serán objetos y contendrán las siguientes propiedades y métodos:

• Nombre, Primer apellido, Segundo apellido, Email, Edad, Ciudad, Número de artículos en carrito de
compra, Función que incremente en 1 el número de artículos y Función que vacíe el carrito.

Añadir dos botones fuera de la lista, uno que incremente de uno en uno los artículos del carrito y el otro
que los vacíe. La lista será generada con un bucle for...in sobre las propiedades del objeto para obtener
el nombre y los valores (pares de key y values).
*/

// Posible hoja de ruta:
// 1. Crear el constructor del usuario con sus propiedades y métodos.

class User {
  //If shoppingCart is inside the constructor it will be a mandatory parameter.
  constructor(
    name,
    firstSurname,
    secondSurname,
    email,
    age,
    city,
    shoppingCart = [],
    counter = 0
  ) {
    this._name = name;
    this._firstSurname = firstSurname;
    this._secondSurname = secondSurname;
    this._email = email;
    this._age = age;
    this._city = city;
    this._shoppingCart = shoppingCart;
    this._counter = counter;
  }
  getName() {
    return `${this._name} ${this._firstSurname} ${this._secondSurname}`;
  }
  getShoppingCart() {
    this._shoppingCart;
  }
  addItem(item) {
    this._shoppingCart.push(item);
    this._counter += 1;
  }
  getProductsCount() {
    this._counter;
  }
  emptyShoppingCart() {
    this._shoppingCart = [];
    this._counter = 0;
  }
}

// 2. Rellenar el array con varios usuarios.
const user1 = new User(
  'Martín',
  'Lupa',
  'Groppelli',
  'email@email.com',
  32,
  'Málaga'
);
const user2 = new User(
  'Pablo',
  'Lupa',
  'Groppelli',
  'email@email.com',
  32,
  'Málaga'
);
const user3 = new User(
  'Gabriel',
  'Gonnet',
  'Eichenberger',
  'email@email.com',
  32,
  'Málaga'
);
const user4 = new User(
  'Franco',
  'Polo',
  'Bianchi',
  'email@email.com',
  32,
  'Málaga'
);
const user5 = new User(
  'Jose',
  'Loro',
  'Lopez',
  'email@email.com',
  32,
  'Málaga'
);
const user6 = new User(
  'Pepito',
  'Pepin',
  'Pepon',
  'email@email.com',
  32,
  'Málaga'
);
let selectedUser = user1;
const usersDB = [user1, user2, user3, user4, user5, user6];
//console.log(usersDB);

// 3. Creamos el HTML y CSS necesarios y accedemos desde JS a los elementos necesarios del DOM y
// guardamos las referencias.

// 4. Rellenamos el selector con el nombre de cada usuario.
const userSelect = document.querySelector('#userSelect');
let idCounter = 1;
usersDB.forEach((user, index) => {
  let userOption = document.createElement('option');
  userOption.setAttribute('value', index);
  userOption.innerText = user.getName();
  userSelect.appendChild(userOption);
  idCounter++;
});

function displayInfo(selectedUser) {
  userDataList.innerHTML = '';

  //Refreshes selectedUser defined previously with current selected user.
  //selectedUser = user;
  console.log(selectedUser);
  for (const key in selectedUser) {
    let userDataRow = document.createElement('li');
    userDataRow.setAttribute('class', 'list-row');
    userDataRow.innerText = `${key}: ${selectedUser[key]}`;
    userDataList.appendChild(userDataRow);
  }
}

// 5. Rellenamos la lista con todas las propiedades de un usuario cualquiera.
// 6. Añadir listeners necesarios.
// 7. Si el selector cambia, actualizamos la lista con toda su información.
let userDataList = document.querySelector('.list');
userSelect.addEventListener('change', (e) => {
  selectedUser = usersDB[e.target.value];
  displayInfo(selectedUser);
});

//let userDataRow = document.createElement("li");
// 8. Si pulsamos los botones, tendrá que actualizarse el número de productos del usuario seleccionado.
const addBtn = document.querySelector('#addBtn');
const emptyBtn = document.querySelector('#emptyBtn');
addBtn.addEventListener('click', () => {
  //console.log(selectedUser);
  selectedUser.addItem('Producto');
  displayInfo(selectedUser);
});
emptyBtn.addEventListener('click', () => {
  selectedUser.emptyShoppingCart();
  displayInfo(selectedUser);
});
