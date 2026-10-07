import PromptSync from "prompt-sync";
 const prompt = PromptSync()
 
 const maiorIdade = parseInt(18);

 let nome = (prompt(`Qual seu nome meu(a) amigo?(a): `))

 let idade = parseInt(prompt(`Agora me conta aí, qual a sua idade?: `))

 if (idade > maiorIdade){
    console.log(`Bacana, você já possui ${idade} anos, ${nome}, então você já é maior de idade!`);
    
 }

 else if (idade < maiorIdade)  
    {
    console.log(`Show de bola ${nome}, como você tem apenas ${idade} anos, você ainda é menor de idade! Faltam apenas ${maiorIdade - idade} anos para chegar lá!!`);
    
 }
   
 