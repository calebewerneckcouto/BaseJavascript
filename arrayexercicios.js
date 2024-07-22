let cores =[ "Vermelho", "Verde", "Azul", "Amarelo"]
let cores2 =[ "Laranja", "Rosa", "Roxo", "Bege"]
let numeros = [1,2,3,4,5,6]

console.log(cores[3])

cores.push("Dourado")//adicionado ultimo item do array.....

console.log(cores)

let ultimaCor = cores.pop();//exclui a ultima cor

console.log(cores)

cores.shift();//Remove o primeiro elemento

cores.unshift("Dourado")//adiciona no comeco do array

console.log(cores)

cores.splice(1,0,"Laranja","preto")//Altera o conteudo do array

console.log(cores)

let novoarryacores = cores.concat(cores2);

console.log(novoarryacores);

numeros.reverse();//inverte o numeros posição
console.log(numeros)

let coresString = cores.join(";")//inserir ; ao inves de ,

console.log(coresString)

let sorteia = cores2.sort()//soerteando...
console.log(sorteia)







