const numbers = [1, 2, 3, 4];
const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["p", "f", "r"];
const vectors = [[1], [2]];

const unionArray = vowels.concat(vectors);
console.log(unionArray);

vectors[0].push(5);
console.log("vectors[0].push(5)", vectors);
console.log(unionArray);

vectors.push(5);
console.log("vectors.push(5)", vectors);
console.log(unionArray);
