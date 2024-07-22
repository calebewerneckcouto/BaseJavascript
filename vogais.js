let vogais = ["a", "e", "i", "o", "u"];
let palavra = "Calebe";
let contadorVogais = 0;

for (const letra of palavra) {
    if (vogais.includes(letra.toLowerCase())) {
        contadorVogais++;
    }
}

console.log("Número de vogais na palavra:", contadorVogais);
