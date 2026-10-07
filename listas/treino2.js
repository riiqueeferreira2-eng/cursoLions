import PromptSync from 'prompt-sync';
 const prompt = PromptSync();

const nota = 5

if (nota >= 6){
    console.log("Aprovado");
} else if (nota < 6 && nota >= 4){
    console.log("Reprovado");
} else {
    console.log("Refaça a prova");
}