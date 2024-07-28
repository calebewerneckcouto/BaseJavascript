const numbers = [65, 44, 12, 4];

// Passa a função `myFunction` como callback para `forEach`
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
    arr[index] = item * 10;
}

console.log(numbers); // Exibe o array modificado
