const prompt = require('prompt-sync')();

let numero;

do {
    numero = prompt("Informe um número positivo: ");
    numero = parseFloat(numero); // Converte a entrada para número (pode ser inteiro ou decimal)
    
    if (numero < 0) {
        console.log("O número informado não é positivo, tente novamente!");
    }
} while (numero < 0);
