// Função síncrona
function syncFunction() {
    console.log("Início da função síncrona");
    // Simulação de uma tarefa que demora para completar
    for (let i = 0; i < 1e9; i++) {} // Loop pesado
    console.log("Fim da função síncrona");
}

console.log("Antes da função síncrona");
syncFunction();
console.log("Depois da função síncrona");
