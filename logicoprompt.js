const prompt = require('prompt-sync')();

// Solicitando os números ao usuário
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

// Verificando as condições usando operadores lógicos
let ambosPositivos = numero1 > 0 && numero2 > 0;
let peloMenosUmPositivo = numero1 > 0 || numero2 > 0;
let nenhumPositivo = !(numero1 > 0) && !(numero2 > 0);

// Exibindo os resultados no console
console.log(`Ambos números são positivos? ${ambosPositivos}`);
console.log(`Pelo menos um número é positivo? ${peloMenosUmPositivo}`);
console.log(`Nenhum número é positivo? ${nenhumPositivo}`);
