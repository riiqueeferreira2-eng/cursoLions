//Atividade 01

import PromptSync from "prompt-sync";
 const prompt = PromptSync ()

let numero = parseInt(prompt('Digite um número: ' ))

if (numero == 0){
console.log(`O número digitado é ${numero}` );
}

else if (numero % 2 != 0){
console.log(`O número ${numero} é impar!`);
}

else {
console.log(`O número ${numero} é par!`);
}
//Atividade 02

