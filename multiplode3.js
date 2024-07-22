// Itera de 1 a 20 usando um loop for
for (let i = 1; i <= 20; i++) {
    // Verifica se o número é múltiplo de 3
    if (i % 3 === 0) {
      // Se for múltiplo de 3, pula para a próxima iteração
      continue;
    }
  
    // Exibe o número processado no console
    console.log(i);
  
    // Verifica se o número é maior que 15
    if (i > 15) {
      // Se for maior que 15, sai do loop
      break;
    }
  }
  