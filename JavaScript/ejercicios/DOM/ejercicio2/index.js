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
// 2. Rellenar el array con varios usuarios.
// 3. Creamos el HTML y CSS necesarios y accedemos desde JS a los elementos necesarios del DOM y
// guardamos las referencias.
// 4. Rellenamos el selector con el nombre de cada usuario.
// 5. Rellenamos la lista con todas las propiedades de un usuario cualquiera.
// 6. Añadir listeners necesarios.
// 7. Si el selector cambia, actualizamos la lista con toda su información.
// 8. Si pulsamos los botones, tendrá que actualizarse el número de productos del usuario seleccionado.

//Defining User class
class User {
  constructor(name, firstSurname, secondSurname, email, age, city, nProducts) {
    this.name = name;
    this.firstSurname = firstSurname;
    this.secondSurname = secondSurname;
    this.email = email;
    this.age = age;
    this.city = city;
    this.nProducts = nProducts;
  }
  incrementProducts() {
    this.nProducts += 1;
  }
  emptyCart() {
    this.nProducts = 0;
  }
}

//Creating Users
user1 = new User(
  'Martín',
  'Lupa',
  'Groppelli',
  'email@email.com',
  32,
  'Málaga',
  2
);
user2 = new User(
  'Pablo',
  'Lupa',
  'Groppelli',
  'email@email.com',
  32,
  'Málaga',
  2
);
user3 = new User(
  'Gabriel',
  'Gonnet',
  'Eichenberger',
  'email@email.com',
  32,
  'Málaga',
  2
);
user4 = new User(
  'Franco',
  'Polo',
  'Bianchi',
  'email@email.com',
  32,
  'Málaga',
  2
);
user5 = new User('Jose', 'Loro', 'Lopez', 'email@email.com', 32, 'Málaga', 2);
user6 = new User(
  'Pepito',
  'Pepin',
  'Pepon',
  'email@email.com',
  32,
  'Málaga',
  2
);

//Populating my "Database"
const usersArray = [user1, user2, user3, user4, user5, user6];
//console.log(usersArray);
console.log(usersArray);

//Creating select and option elements and populating it with DB.
const container = document.querySelector('#container');
const usersInput = document.createElement('select');
usersInput.setAttribute('class', 'select');
container.appendChild(usersInput);

for (let i = 0; i < usersArray.length; i++) {
  let option = document.createElement('option');
  option.setAttribute('value', i);
  option.innerText = `${usersArray[i].name} ${usersArray[i].firstSurname} ${usersArray[i].secondSurname}`;
  usersInput.appendChild(option);
}

//Creating a second container to organize buttons
const btnContainer = document.createElement('div');
btnContainer.setAttribute('class', 'btnContainer');
container.appendChild(btnContainer);

//Creating and adding increaseBtn
const increaseBtn = document.createElement('button');
increaseBtn.innerText = 'Increase Products';
increaseBtn.setAttribute('class', 'increaseBtn');
btnContainer.appendChild(increaseBtn);

//Creating and adding emptyBtn
const emptyBtn = document.createElement('button');
emptyBtn.innerText = 'Empty cart';
emptyBtn.setAttribute('class', 'emptyBtn');
btnContainer.appendChild(emptyBtn);

//Creating list and rendering selected user info.
const option = document.querySelectorAll('option');
usersInput.addEventListener('change', (e) => {
  let userSelector = e.target.value;
  let selectedUser = usersArray[userSelector];
  console.log(selectedUser);
  const dataList = document.createElement('ul');
  //------------------------------
  let infoRow = document.createElement('li');
  infoRow.innerText = selectedUser.keys(name);
  dataList.appendChild(infoRow);
  //------------------------------
  let infoRow1 = document.createElement('li');
  infoRow1.innerText = selectedUser.firstSurname;
  dataList.appendChild(infoRow1);
  //------------------------------
  let infoRow2 = document.createElement('li');
  infoRow2.innerText = selectedUser.secondSurname;
  dataList.appendChild(infoRow2);
  //------------------------------
  let infoRow3 = document.createElement('li');
  infoRow3.innerText = selectedUser.email;
  dataList.appendChild(infoRow3);
  //------------------------------
  let infoRow4 = document.createElement('li');
  infoRow4.innerText = selectedUser.age;
  dataList.appendChild(infoRow4);
  //------------------------------
  let infoRow5 = document.createElement('li');
  infoRow5.innerText = selectedUser.city;
  dataList.appendChild(infoRow5);
  //------------------------------
  let infoRow6 = document.createElement('li');
  infoRow6.innerText = selectedUser.nProducts;
  dataList.appendChild(infoRow6);

  container.appendChild(dataList);
});
