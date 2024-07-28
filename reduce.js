const numeros = [5,10,15,20,25,35,18];

const soma = numeros.reduce((acumulador,numero)=>acumulador + numero,0);

console.log("Array Original:", numeros);
console.log("Soma dos números:", soma);