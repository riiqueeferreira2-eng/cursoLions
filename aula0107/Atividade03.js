import PromptSync from "prompt-sync";
 const prompt = PromptSync()

const anoAtual = parseInt (2026)

 let nome = (prompt(`Olá, tudo joia contigo? Me conta aí, qual é o seu nome? `));

 let idade = parseInt(prompt(`Agora me fala aí! Qual a sua idade? `));

 console.log(`Bacana, é um prazer ${nome}, legal que você tem ${idade} anos! Então você é de ${anoAtual - idade }`);
 
