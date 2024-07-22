const prompt = require('prompt-sync')();

// Solicitando os números ao usuário
let numero = Number(prompt("Digite o primeiro número: "));


if(numero > 0){
    console.log("Numero é Positivo")
}else if(numero < 0){
    console.log("Numero é Negativo")
}else if (numero == 0){
    console.log("Numero é Zero")
}else{
    console.log("Não sei o que vc digitou ai....")
}