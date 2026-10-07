import PromptSync from "prompt-sync";
 const prompt = PromptSync()
 
 let Prova1 = parseFloat(prompt(`A sua nota na prova primeira prova foi?: ` ))

 let Prova2 = parseFloat(prompt(`A sua nota na prova segunda prova foi?: ` ))

 var notas = [];
 notas.push(Prova1);
 notas.push(Prova2); 

 const media = (notas[0] + notas[1]) /notas.length;

 console.log(`A média é: ${media}`);