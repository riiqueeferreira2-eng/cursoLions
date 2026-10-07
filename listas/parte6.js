import  promptSync from "prompt-sync";
const prompt = promptSync();

let peso = Number(prompt("Peso: "));
let altura = Number(prompt("Altura: "));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log(imc + ": Sobrepeso");
} else if (imc >= 30 && imc < 34.9) {
    console.log("Obesidade");
} else {
    console.log(imc +": Só comer menos");
}   