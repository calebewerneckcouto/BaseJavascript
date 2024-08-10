// Função assíncrona usando Promise
function asyncFunction() {
    return new Promise((resolve) => {
        console.log("Início da função assíncrona");
        setTimeout(() => {
            console.log("Fim da função assíncrona");
            resolve();
        }, 2000); // Simula uma tarefa que demora 2 segundos
    });
}

// Usando async/await para lidar com a função assíncrona
async function runAsync() {
    console.log("Antes da função assíncrona");
    await asyncFunction(); // Espera a função assíncrona terminar
    console.log("Depois da função assíncrona");
}

runAsync();
