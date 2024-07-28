const numeros = [1,2,3,4,5,6];

const multiplicarPorDois = numeros.map(numero => numero * 2 );

const calcularQuadrado = numeros.map(numero => numero ** 2);

console.log("Array original:",numeros);
console.log("Cada número multiplicado por dois:",multiplicarPorDois);
console.log("Quadrado de cada numero:",calcularQuadrado);
