import promptSync from "prompt-sync";
const prompt = promptSync();



const frutas = ["banana", "maçã", "laranja"];
console.log(frutas); // Todas as frutas do array;

console.log(frutas[1]); // Fruta indice 1, (segunda), do array;

console.log(frutas.length); // Quantidade de frutas no array;

frutas.push("manga");
console.log(frutas); // Adiciona a fruta "manga" no final do array;

frutas.unshift("uva");
console.log(frutas); // Adiciona a fruta "uva" no início do array;

frutas.pop();
console.log(frutas); // Remove a última fruta do array;

console.log(frutas.length - 1); // Índice da última fruta no array;

const numeros = [4,8,15];
console.log(`A soma dos números é de ${numeros[0] + numeros[1] + numeros[2]}`); //Soma dos números 4, 8 e 15;

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Imprime todas as frutas do array, uma por linha;
}

console.log(frutas.includes("banana"));     // Imprime true se "banana" estiver no array, false caso contrário;