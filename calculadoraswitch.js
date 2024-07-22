const prompt = require('prompt-sync')();

console.log("------Calculadora------");
console.log("------1- Soma------");
console.log("------2- Subtração------");
console.log("------3- Multiplicação------");
console.log("------4- Divisão------");

let v1 = prompt("Informe o primeiro Valor? ");
let v2 = prompt("Informe o Segundo Valor? ");
let opcao = prompt("Qual operação? ");

// Convertendo as strings para números inteiros
v1 = parseInt(v1);
v2 = parseInt(v2);

let resultado;

switch (opcao) {
  case '1': // Soma
    resultado = v1 + v2;
    break;
  case '2': // Subtração
    resultado = v1 - v2;
    break;
  case '3': // Multiplicação
    resultado = v1 * v2;
    break;
  case '4': // Divisão
    resultado = v1 / v2;
    break;
  default:
    console.log("Opção inválida.");
    break;
}

if (resultado !== undefined) {
  console.log(`O resultado da operação é: ${resultado}`);
}
