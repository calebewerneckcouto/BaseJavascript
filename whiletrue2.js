const prompt = require('prompt-sync')();

let soma = 0;

console.log("Digite números para somar. Digite um valor não numérico para parar.");

while (true) {
    let input = prompt("Digite um número: ");

    // Verifica se o input é não numérico (se não for um número, parseFloat retorna NaN)
    let numero = parseFloat(input);
    if (isNaN(numero)) {
        break; // Sai do loop se não for um número
    }

    soma += numero; // Soma o número ao total acumulado
}

console.log(`A soma dos números inseridos é: ${soma}`);
