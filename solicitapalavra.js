const prompt = require('prompt-sync')();

// Solicita ao usuário uma palavra ou frase
let entrada = prompt("Digite uma palavra ou frase: ");

// Itera sobre cada caractere da string usando for...of
for (let caractere of entrada) {
  console.log(caractere);
}
