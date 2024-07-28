const numeros = [1, 2, 3, 4, 5, 6, 25, 53, 48, 198];

// Filtra os números maiores que 10
const numerosMaioresQueDez = numeros.filter(numero => numero > 10);

// Multiplica cada número por dois
const multiplicarPorDois = numeros.map(numero => numero * 2);

// Filtra os números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);

// Calcula o quadrado de cada número
const calcularQuadrado = numeros.map(numero => numero ** 2);

// Exibe os resultados no console
console.log("Array original:", numeros);
console.log("Cada número multiplicado por dois:", multiplicarPorDois);
console.log("Quadrado de cada número:", calcularQuadrado);
console.log("Números maiores que 10:", numerosMaioresQueDez);
console.log("Números pares:");

numerosPares.forEach(numero => console.log(numero));
