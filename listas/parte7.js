import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Sua idade: "));
let vip = prompt("Está na lista VIP? (sim/nao): "); 

if (idade < 18) {
    console.log("Entrada não permitida.");
} else if (idade >= 18 && vip === "sim") {
    console.log("Bem-vindo à área VIP!");
} else {
    console.log("Entrada liberada (área comum).");
}   