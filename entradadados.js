//npm install prompt-sync//

const prompt = require('prompt-sync')();
let nome = prompt("Qual é o seu nome?");
console.log("Nome do Usuario: ", nome);

function confirm(message) {
    const resposta = prompt(`${message} (Responda com "sim" ou "nao"): `);
    return (resposta.toLowerCase() === 'sim');
}

let continuar = confirm ("Deseja Continuar?");
console.log("O Usuario Deseja Continuar?", continuar);