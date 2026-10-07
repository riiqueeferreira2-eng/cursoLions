import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Sua idade: "));
if (idade >= 18) {
console.log("Acesso permitido.");
} else {
console.log("Acesso negado: menor de idade.");
}       
