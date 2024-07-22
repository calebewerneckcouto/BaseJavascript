let calculadoraBasica = function(numero1, numero2, operacao) {
    switch (operacao) {
        case 'adição':
            return numero1 + numero2;
        case 'subtração':
            return numero1 - numero2;
        case 'multiplicação':
            return numero1 * numero2;
        case 'divisão':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Erro: divisão por zero!";
            }
        default:
            return "Operação inválida. Escolha entre adição, subtração, multiplicação ou divisão.";
    }
};

// Exemplos de uso da calculadora básica
console.log(calculadoraBasica(10, 5, 'adição')); // Saída: 15
console.log(calculadoraBasica(10, 5, 'subtração')); // Saída: 5
console.log(calculadoraBasica(10, 5, 'multiplicação')); // Saída: 50
console.log(calculadoraBasica(10, 0, 'divisão')); // Saída: Erro: divisão por zero!
console.log(calculadoraBasica(10, 2, 'divisão')); // Saída: 5
console.log(calculadoraBasica(10, 5, 'potência')); // Saída: Operação inválida. Escolha entre adição, subtração, multiplicação ou divisão.
