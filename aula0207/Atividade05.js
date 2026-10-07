import PromptSync from "prompt-sync";
 const prompt = PromptSync()

let somaPares = 0;
let somaImpares = 0;

let totalPares = 0;
let totalImpares = 0;

let mediaPares = 0;
let mediaImpares = 0;

for (let i = 0; i <= 999; i++) {
    if (i % 2 === 0){
        somaPares = somaPares + i;
        totalPares ++; // totalPares = totalPares + 1
        console.log(`O número ${i} é par!`);
        
    } else {
        somaImpares = somaImpares +i;
        totalImpares ++; // totalImpares = totalImpares + 1
        console.log(`O número ${i} é impar!`);
    }
}

//Medias

mediaPares = somaPares / totalPares;
console.log(`A media de pares é ${mediaPares}`);

mediaImpares = somaImpares / totalImpares;
console.log(`A media de impares é ${mediaImpares}`);

// Qual soma é maior?

if  (somaPares > somaImpares){
    console.log(`A soma de pares é superior à soma de ímpares ${somaPares}`);
    
} else if (somaImpares > somaPares) {
    console.log(`A soma de ímpares é superior à soma de pares ${somaImpares}`)
    
} else {
    console.log(`As somas são equivalentes`);
    
}
    