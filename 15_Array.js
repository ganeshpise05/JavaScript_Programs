const marvelHeroes = ["Thor","Ironman","Spiderman"]
const dcHeroes = ["Superman", "Flash", "Batman"]

marvelHeroes.push(dcHeroes)

console.log(marvelHeroes);
console.log(marvelHeroes[3][1]);

console.log("----------");

const ans = marvelHeroes.concat(dcHeroes)



console.log("----------------");

const newAns = [...marvelHeroes, ...dcHeroes]
console.log(newAns);

console.log("----------------");

const a = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const b = a.flat(Infinity)
console.log(b);


console.log("----------------");


console.log(Array.isArray("Ganesh"))
console.log(Array.from("Ganesh"))

console.log("----------------");

console.log(Array.from({name:"Ganesh"}))// interesting

console.log("----------------");

// Creating / Strore values in array.

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));

console.log("----------------");


