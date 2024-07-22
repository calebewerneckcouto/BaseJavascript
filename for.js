const prompt = require('prompt-sync')();

// Solicita ao usuário para inserir um número inteiro positivo
let numero = parseInt(prompt("Digite um número inteiro positivo: "));

// Verifica se o número inserido é positivo
if (numero <= 0 || Number.isNaN(numero)) {
    console.log("Número inválido. Por favor, insira um número inteiro positivo.");
} else {
    let soma = 0;

    // Utiliza um loop for para calcular a soma de 1 até o número inserido
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }

    // Exibe o resultado da soma no console
    console.log(`A soma de todos os números de 1 até ${numero} é: ${soma}`);
}
