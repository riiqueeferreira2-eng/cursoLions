import promptSync from "prompt-sync";
const prompt = promptSync();

const cidades = ["Curitiba", "Ponta Grossa", "Londrina", "Maringá"];
let primeira = cidades[0];
let ultima = cidades[cidades.length - 1];

console.log("primeira", primeira); // Imprime a primeira cidade do array;
console.log("ultima", ultima); // Imprime a última cidade do array;