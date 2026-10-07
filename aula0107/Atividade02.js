import PromptSync from "prompt-sync";
 const prompt = PromptSync()

 let gostaDeCafe = (prompt('Você gosta de café? ' ))

 if (gostaDeCafe == "Sim"){
 console.log(`O fulano disse ${gostaDeCafe}!`)}     

 else if (gostaDeCafe == "Não"){
 console.log(`O fulano disse que ${gostaDeCafe}, doideira né?!`)}

 else{
 console.log("O fulano não sabe se gosta de café. Pode isso Arnaldo?")}