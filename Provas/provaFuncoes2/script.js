// script.js
document.getElementById('calculate').addEventListener('click', () => {
    // Obtém o valor total da conta e a qualidade do serviço
    const valorTotal = parseFloat(document.getElementById('total').value);
    const qualidadeServico = document.getElementById('service-quality').value;

    // Verifica se o valor da conta é válido
    if (isNaN(valorTotal) || valorTotal <= 0) {
        alert('Por favor, insira um valor válido para a conta.');
        return;
    }

    // Função para determinar a porcentagem da gorjeta com base na qualidade do serviço
    const porcentagemGorjeta = (qualidade) => {
        switch (qualidade) {
            case 'good':
                return 0.20; // 20% para "Bom"
            case 'average':
                return 0.15; // 15% para "Regular"
            case 'poor':
                return 0.10; // 10% para "Ruim"
            default:
                return 0; // Caso não corresponda a nenhum dos casos acima
        }
    };

    // Função para calcular o valor da gorjeta
    const calcularGorjeta = (valor, porcentagem) => valor * porcentagem;

    // Obtém a porcentagem da gorjeta com base na qualidade do serviço
    const porcentagem = porcentagemGorjeta(qualidadeServico);
    // Calcula o valor da gorjeta
    const gorjeta = calcularGorjeta(valorTotal, porcentagem);
    // Calcula o total com a gorjeta
    const totalComGorjeta = valorTotal + gorjeta;

    // Exibe o resultado na página
    document.getElementById('result').innerText = `Gorjeta: R$ ${gorjeta.toFixed(2)}\nTotal com Gorjeta: R$ ${totalComGorjeta.toFixed(2)}`;
});
