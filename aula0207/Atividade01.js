import PromptSync from "prompt-sync";
 const prompt = PromptSync()

let tabuada = parseInt(prompt(`Informe um número e eu te informarei a tabuada correspondente!: `))
  for (let contador = 0; contador <= 10; contador ++){
    let resultado = (tabuada * contador) 
    console.log(`A multiplicação de ${tabuada} x ${contador} é a seguinte: `, resultado);
    
  }