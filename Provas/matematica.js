const prompt = require('prompt-sync')();


function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}


function main() {
 
    let numero = parseInt(prompt("Digite um número inteiro positivo: "));
    
  
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        console.log("Número inválido. Por favor, digite um número inteiro positivo.");
        return;
    }
    
    
    let fatorial = calcularFatorial(numero);
    console.log(`Fatorial de ${numero}: ${fatorial}`);
}


main();
