import PromptSync from "prompt-sync";
const prompt = PromptSync();

const media = Number(prompt("Média do aluno: "));

if (media >= 7) {
console.log("Aprovado");
} else if (media >= 5 && media < 7) {
console.log("Recuperação");
} else {                        
console.log("Reprovado");
}