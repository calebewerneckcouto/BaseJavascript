const prompt = require('prompt-sync')();

// Solicitando os números ao usuário
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

// Comparando os números utilizando operadores de comparação
console.log(`${numero1} == ${numero2}:`, numero1 == numero2);   // Igualdade (valor)
console.log(`${numero1} === ${numero2}:`, numero1 === numero2); // Igualdade estrita (valor e tipo)
console.log(`${numero1} != ${numero2}:`, numero1 != numero2);   // Diferença (valor)
console.log(`${numero1} !== ${numero2}:`, numero1 !== numero2); // Diferença estrita (valor e tipo)
console.log(`${numero1} < ${numero2}:`, numero1 < numero2);     // Menor que
console.log(`${numero1} > ${numero2}:`, numero1 > numero2);     // Maior que
console.log(`${numero1} <= ${numero2}:`, numero1 <= numero2);   // Menor ou igual a
console.log(`${numero1} >= ${numero2}:`, numero1 >= numero2);   // Maior ou igual a
