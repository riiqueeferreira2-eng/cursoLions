const vendas = [120, 340, 85, 200, 90];
let total = 0;
for (let i = 0; i < vendas.length; i++) {
 total += vendas[i]}; 
console.log("Faturamento:", total) 

// += significa total = total + vendas[i];
// i++ significa i = i + 1, ou seja, aumenta de 1 em 1 a cada repetição do loop;
// O loop passa pelo array vendas, somando os elementos do array.