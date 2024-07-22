const prompt = require('prompt-sync')();

// Variável para armazenar o saldo inicial
let saldo = 1000; // Exemplo de saldo inicial

// Função para exibir o menu e obter a escolha do usuário
function exibirMenu() {
    console.log("\n=== Simulador de Caixa Eletrônico ===");
    console.log("1. Ver Saldo");
    console.log("2. Depositar");
    console.log("3. Sacar");
    console.log("4. Sair");
    console.log("==============================");

    let escolha = prompt("Escolha uma opção: ");
    console.log(); // Adiciona uma linha em branco para separar a entrada do usuário

    return escolha;
}

// Função para exibir o saldo atual
function verSaldo() {
    console.log(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);
}

// Função para realizar um depósito na conta
function depositar() {
    let valorDeposito = parseFloat(prompt("Digite o valor a depositar: "));
    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        console.log("Valor de depósito inválido.");
    } else {
        saldo += valorDeposito;
        console.log(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso.`);
    }
}

// Função para realizar um saque da conta
function sacar() {
    let valorSaque = parseFloat(prompt("Digite o valor a sacar: "));
    if (isNaN(valorSaque) || valorSaque <= 0) {
        console.log("Valor de saque inválido.");
    } else if (valorSaque > saldo) {
        console.log("Saldo insuficiente para realizar o saque.");
    } else {
        saldo -= valorSaque;
        console.log(`Saque de R$ ${valorSaque.toFixed(2)} realizado com sucesso.`);
    }
}

// Loop principal do programa
while (true) {
    let escolha = exibirMenu();

    switch (escolha) {
        case '1':
            verSaldo();
            break;
        case '2':
            depositar();
            break;
        case '3':
            sacar();
            break;
        case '4':
            console.log("Obrigado por utilizar nosso caixa eletrônico. Volte sempre!");
            return; // Encerra o programa
        default:
            console.log("Opção inválida. Escolha uma opção válida do menu.");
    }
}
