// Criando uma nova Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona
    setTimeout(() => {
        const success = true; // Simula sucesso ou falha

        if (success) {
            resolve("Operação bem-sucedida!"); // A Promise é cumprida
        } else {
            reject("Houve um erro."); // A Promise é rejeitada
        }
    }, 2000); // Simula um atraso de 2 segundos
});

// Consumindo a Promise
myPromise
    .then(result => {
        console.log(result); // "Operação bem-sucedida!"
    })
    .catch(error => {
        console.error(error); // "Houve um erro."
    });
