const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function valorPagamento(valorPrestacao, diasAtraso) {
    if (valorPrestacao <= 0) {
        return "Valor da prestação deve ser maior que zero.";
    }

    if (diasAtraso <= 0) {
        return valorPrestacao;
    } else {
        let valorMulta = valorPrestacao * 0.03; // 3% de multa
        let valorJuros = valorPrestacao * (0.001 * diasAtraso); // 0.1% de juros por dia de atraso
        let valorTotal = valorPrestacao + valorMulta + valorJuros;
        return valorTotal.toFixed(2); // Retorna o valor com duas casas decimais
    }
}

let totalPrestacoes = 0;
let valorTotalPago = 0;

function iniciarPrograma() {
    rl.question("Digite o valor da prestação (ou 0 para sair): ", (userInput) => {
        let valorPrestacao = parseFloat(userInput);

        if (valorPrestacao === 0) {
            encerrarPrograma();
            return;
        }

        rl.question("Digite o número de dias em atraso: ", (userInput) => {
            let diasAtraso = parseInt(userInput);

            let valorAPagar = valorPagamento(valorPrestacao, diasAtraso);
            console.log(`Valor a ser pago: R$ ${valorAPagar}`);

            totalPrestacoes++;
            valorTotalPago += parseFloat(valorAPagar);

            iniciarPrograma();
        });
    });
}

function encerrarPrograma() {
    rl.close();
    console.log(`Relatório do dia:`);
    console.log(`Quantidade de prestações pagas: ${totalPrestacoes}`);
    console.log(`Valor total pago: R$ ${valorTotalPago.toFixed(2)}`);
}

// Iniciar o programa
iniciarPrograma();
