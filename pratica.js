const prompt = require('prompt-sync')();

// Solicitando nome e idade ao usuário
let nome = prompt("Qual é o seu nome? ");
let idade = prompt("Quantos anos você tem? ");

// Exibindo mensagem formatada usando concatenação tradicional
console.log("Olá, " + nome + "! Você tem " + idade + " anos.");

// Exibindo mensagem formatada usando template strings (interpolação)
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
