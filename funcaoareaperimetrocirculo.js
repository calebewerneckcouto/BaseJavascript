function areaPerimetro(raio) {
    // Definindo o valor de pi
    const pi = 3.14159;

    // Calculando a área
    let area = pi * raio ** 2;

    // Calculando a circunferência (perímetro)
    let circunferencia = 2 * pi * raio;

    // Retornando os resultados
    console.log("Área do Círculo:", area);
    console.log("Circunferência:", circunferencia);
}

// Chamando a função para raio igual a 5
areaPerimetro(5);
