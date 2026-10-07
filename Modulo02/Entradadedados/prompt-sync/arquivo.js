import promptSync from "prompt-sync"
 const prompt = promptSync();

   let nome = prompt("Qual o nome do seu pet? ");
   let idade = prompt("Qual a idade do seu pet? ");

//Duas formas abaixo, para concatenar o valor da variável junto ao texto da resposta!

//Concatena

//console.log("Olá, o nome do meu pet é " + nome + " e sua idade é de " + idade + "!") 

//Interpola

console.log(`Olá, o nome do meu pet é ${nome} e sua idade é ${idade} !!` ); 

/* JSON

{
  marca: "string",
  cor: "string",
  tipo: "string",
  quantidade: number;
},

*/



let numero1 = parseFloat ("10");
let numero2 = 5;
let resultado = numero1 + numero2

parseFloat = (numero1)

console.log(resultado);


