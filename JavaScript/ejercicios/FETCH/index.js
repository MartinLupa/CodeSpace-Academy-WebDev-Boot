const form = document.querySelector("#pokemon-form");
const input = document.querySelector("#pokemon");
const pokeContainer = document.querySelector("#pokemon-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pokeName = input.value;
  getPokemon(pokeName);
});

function getPokemon(pokeName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => response.json())
    .then((data) => createPokemon(data));
}

function createPokemon(pokemon) {
  const h3 = document.createElement("h3");
  h3.textContent = pokemon.name;
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  pokeContainer.appendChild(h3).appendChild(img);
}
