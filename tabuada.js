const prompt = require('prompt-sync')();

// Solicita ao usuário um número
let numero = prompt("Digite um número para ver sua tabuada: ");
numero = parseInt(numero); // Converte para inteiro, se necessário

// Verifica se o número inserido é válido
if (isNaN(numero)) {
  console.log("Número inválido. Por favor, digite um número válido.");
} else {
  // Itera de 1 a 10 e exibe a tabuada
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
