function calcularIMC() {
    // Obter os valores de peso e altura dos inputs
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    // Validar se os campos não estão vazios
    if (peso === "" || altura === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Converter os valores para números
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Arredondar o IMC para uma casa decimal
    imc = imc.toFixed(1);

    // Exibir o resultado na div de resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>Seu IMC é: ${imc}</h2>`;

    // Interpretar o IMC
    var interpretacao = interpretarIMC(imc);
    resultadoDiv.innerHTML += `<p>${interpretacao}</p>`;
}

function interpretarIMC(imc) {
    if (imc < 18.5) {
        return "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Seu peso está normal (dentro da faixa saudável).";
    } else if (imc >= 25 && imc < 30) {
        return "Você está acima do peso.";
    } else {
        return "Você está com obesidade.";
    }
}
