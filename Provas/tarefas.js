let tarefas = [];


tarefas.push("Dar banho no cachorro", "Comprar Margarina", "Encher o Pneu do Carro");

console.log("Tarefas após adicionar:", tarefas);

let tarefaRemovida = tarefas.pop();
console.log("Tarefa removida:", tarefaRemovida);
console.log("Tarefas após remover:", tarefas);


tarefas[0] = "Banho Dado no Cachorro";
console.log("Tarefas após atualizar:", tarefas);
