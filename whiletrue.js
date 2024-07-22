const prompt = require('prompt-sync')();

while (true) {
    let input = prompt("Digite um número (ou 'fim' para sair): ");

    if (input.toLowerCase() === 'fim') {
        console.log("Programa encerrado pelo usuário.");
        break; // Sai do loop
    }

    let numero = parseInt(input);
    
    if (isNaN(numero)) {
        console.log("Entrada inválida. Por favor, digite um número válido.");
        continue; // Volta ao início do loop
    }

    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}
