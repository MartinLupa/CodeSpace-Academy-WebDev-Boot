const form = document.querySelector("#pokemon-form");
const input = document.querySelector("#pokemon");
const pokeContainer = document.querySelector("#pokemon-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pokeName = input.value;
  getPokemon(pokeName);
});

const getPokemon = async function (pokeName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    const data = await response.json();
    createPokemon(data);
  } catch (err) {
    console.log("ERROR", err);
  }
};

function createPokemon(pokemon) {
  const h3 = document.createElement("h3");
  h3.textContent = pokemon.name;
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  pokeContainer.appendChild(h3).appendChild(img);
}
