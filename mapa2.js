const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// Função que transforma o elemento em maiúscula
function tornaMaiuscula(elemento, indice, array) {
    return elemento.toUpperCase();
}

// Usa a função `tornaMaiuscula` com `map` para criar um novo array
const newArray = arr.map(tornaMaiuscula);

// Usa uma função de seta (arrow function) com `map` para criar um novo array
const newArray2 = arr.map(elemento => elemento.toUpperCase());

// Mostra o resultado no console
console.log('newArray usando tornaMaiuscula:', newArray);
console.log('newArray2 usando função de seta:', newArray2);
