let temp = 30;
if (temp > 0 && temp < 20) {
console.log("Frio");
} else if (temp >= 30 ) {
console.log("Quente"); // nunca executa
} else {
console.log("Acima de zero");
}
// Esperado com temp = 30 -> Quente