const prompt = require('prompt-sync')();

function calcularMediaNotas() {
    // Solicita o número de alunos
    let numAlunos = prompt("Digite o número total de alunos na turma: ");
  
    // Validação do número de alunos
    numAlunos = parseInt(numAlunos);  // Convertendo para inteiro
  
    if (isNaN(numAlunos) || numAlunos <= 0) {
      console.log("Número de alunos inválido. Encerrando o programa.");
      return;
    }
  
    // Inicializa variáveis
    let somaNotas = 0;
    let maiorNota = -Infinity;
    let menorNota = Infinity;
  
    // Coleta as notas dos alunos
    for (let i = 1; i <= numAlunos; i++) {
      let nota = prompt(`Digite a nota do aluno ${i}: `);
  
      // Validação da nota
      nota = parseFloat(nota);  // Convertendo para float
  
      if (isNaN(nota)) {
        console.log("Nota inválida. Digite novamente.");
        i--; // Reduz o contador para repetir a coleta da nota
        continue;
      }
  
      // Atualiza variáveis
      somaNotas += nota;
      maiorNota = Math.max(maiorNota, nota);
      menorNota = Math.min(menorNota, nota);
    }
  
    // Calcula a média
    const media = somaNotas / numAlunos;
  
    // Exibe os resultados
    console.log(`\nMédia da turma: ${media.toFixed(2)}`);
    console.log(`Maior nota: ${maiorNota.toFixed(2)}`);
    console.log(`Menor nota: ${menorNota.toFixed(2)}`);
}

// Chama a função para calcular a média
calcularMediaNotas();
