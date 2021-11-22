/*
localStorage --> The localStorage read-only property of the window interface allows you to access 
a Storage object for the Document's origin; the stored data is saved across browser sessions.
SET --> save info
GET --> get info

Hasta 5mb.
No guardar info sensible.
*/

const userName = "Martín";

//setItem(key, value);
localStorage.setItem("userName", userName);

//getItem(key);
const localStorageUserName = localStorage.getItem("userName");
console.log(localStorageUserName);

//removeItem(key);
//localStorage.removeItem("userName");

/*sessionStorage --> */

//DOM
const btnBotones = document.querySelector("#btnBotones");
const divBotones = document.querySelector("#divBotones");
const fondo = document.querySelector("#fondo");

//Funciones autoejecutables
(() => {
  btnBotones.addEventListener("click", agregarBotones);
  divBotones.addEventListener("click", delegacion);
})();

(() => {
  const color = localStorage.getItem("colorFondo");
  if (!color) {
    fondo.className = "bg-light";
  } else {
    fondo.className = color;
  }
})();

function agregarBotones(event) {
  divBotones.innerHTML = `<button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>`;
}

function delegacion(e) {
  //Guard clause to avoid click events outside the buttons
  if (!(e.target instanceof HTMLButtonElement)) return;

  const color = e.target.classList[1];
  switch (color) {
    case "btn-primary":
      fondo.classList = "bg-primary";
      localStorage.setItem("colorFondo", "bg-primary");
      break;
    case "btn-secondary":
      fondo.classList = "bg-secondary";
      localStorage.setItem("colorFondo", "bg-secondary");
      break;
    case "btn-danger":
      fondo.classList = "bg-danger";
      localStorage.setItem("colorFondo", "bg-danger");
      break;
    case "btn-success":
      fondo.classList = "bg-success";
      localStorage.setItem("colorFondo", "bg-success");
      break;
    case "btn-warning":
      fondo.classList = "bg-warning";
      localStorage.setItem("colorFondo", "bg-warning");
      break;
  }
}
