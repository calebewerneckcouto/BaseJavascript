const prompt = require('prompt-sync')();

let v1 = prompt("Informe o primeiro Valor? ");
let v2 = prompt("Informe o Segundo Valor? ");

// Convertendo as strings para números inteiros
v1 = parseInt(v1);
v2 = parseInt(v2);

// Realizando a operação matemática (soma)
let soma = v1 + v2;

// Realizando a operação matemática (subtração)
let sub = v1 - v2;

// Realizando a operação matemática (produto)
let produto = v1 * v2;

// Realizando a operação matemática (Divisão)
let divisao = v1 / v2;

console.log("Resultado da Soma é:", soma);
console.log("Resultado da Subtração é:", sub);
console.log("Resultado do Produto é:", produto);
console.log("Resultado da Divisão é:", divisao);
