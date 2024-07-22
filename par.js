// Itera de 1 a 10 usando um loop for
for (let i = 1; i <= 10; i++) {
    // Verifica se o número é par
    if (i % 2 === 0) {
      // Se for par, pula para a próxima iteração
      continue;
    }
  
    // Exibe o número processado no console
    console.log(i);
  
    // Verifica se o número é igual a 8
    if (i === 8) {
      // Se for igual a 8, sai do loop
      break;
    }
  }
  