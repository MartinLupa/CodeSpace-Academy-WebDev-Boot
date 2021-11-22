const form = document.querySelector('#pokemon-form');
const input = document.querySelector('#pokemon');
const pokeContainer = document.querySelector('#pokemon-container');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let pokeName = input.value;
  getPokemon(pokeName);
  form.reset(); //Empty form input.
});
const getPokemon = async function (pokeName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    const data = await response.json();
    createPokemon(data);
  } catch (err) {
    console.log('ERROR', err);
  }
};
// OPTION 1 - Create a pokemon one after another
// function createPokemon(pokemon) {
// const h3 = document.createElement("h3");
// h3.textContent = pokemon.name;
// const img = document.createElement("img");
// img.src = pokemon.sprites.front_default;
// pokeContainer.appendChild(h3).appendChild(img);
// }
// OPTION 2 - Replace original pokemon with new one
function createPokemon(pokemon) {
  const h3 = document.querySelector('.pokemon-name');
  const img = document.querySelector('.pokemon-img');
  h3.textContent = pokemon.name;
  img.setAttribute('src', pokemon.sprites.front_default);
}
