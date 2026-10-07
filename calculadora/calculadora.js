import promptSync from "prompt-sync";
const prompt = promptSync();

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

let opcao = "";

while (opcao !== "0") {
  console.log("\n1) Somar  2) Subtrair  3) Multiplicar  4) Dividir  0) Sair");
  opcao = prompt("Opção: ");

  if (opcao === "0") {
    console.log("Até logo!");
  } else if (opcao !== "1" && opcao !== "2" && opcao !== "3" && opcao !== "4") {
    console.log("Opção inválida!");
  } else {
    const num1 = Number(prompt("Número 1: "));
    const num2 = Number(prompt("Número 2: "));

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Entrada inválida! Digite apenas números.");
    } else {
      switch (opcao) {
        case "1":
          console.log("Resultado:", somar(num1, num2));
          break;
        case "2":
          console.log("Resultado:", subtrair(num1, num2));
          break;
        case "3":
          console.log("Resultado:", multiplicar(num1, num2));
          break;
        case "4":
          if (num2 === 0) {
            console.log("Não é possível dividir por zero");
          } else {
            console.log("Resultado:", dividir(num1, num2));
          }
          break;
      }
    }
  }
}