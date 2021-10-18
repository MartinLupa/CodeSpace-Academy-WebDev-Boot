var prompt = require('prompt-sync')();

const base = parseInt(prompt('Base (en cm): '));
const height = parseInt(prompt('Base (en cm): '));

const surface = base * height;
const perimeter = 2 * (base + height);

console.log(`Surface is: ${surface}cm.`);
console.log(`Perimeter is: ${perimeter}cm.`);
