import PromptSync from "prompt-sync"
 const prompt = PromptSync();

let nota1 = parseFloat (prompt("Informe sua nota do primeiro semestre: "))
let nota2 = parseFloat (prompt("Informe sua nota do segundo semestre: "))

let resultado = parseFloat((nota1+nota2)/2);


console.log(`A sua média considerando, ${nota1} e ${nota2} é a seguinte: ${resultado}` )