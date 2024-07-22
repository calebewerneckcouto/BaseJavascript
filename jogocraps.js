function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playCraps() {
    let point = 0;
    let firstRoll = true;

    while (true) {
        let dice1 = rollDice();
        let dice2 = rollDice();
        let sum = dice1 + dice2;

        console.log(`Você lançou ${dice1} + ${dice2} = ${sum}`);

        if (firstRoll) {
            if (sum === 7 || sum === 11) {
                console.log(`Natural! Você ganhou!`);
                return;
            } else if (sum === 2 || sum === 3 || sum === 12) {
                console.log(`Craps! Você perdeu!`);
                return;
            } else {
                point = sum;
                console.log(`Ponto é ${point}`);
                firstRoll = false;
            }
        } else {
            if (sum === point) {
                console.log(`Você fez o ponto ${point} novamente! Você ganhou!`);
                return;
            } else if (sum === 7) {
                console.log(`Você tirou um 7. Você perdeu!`);
                return;
            }
        }
    }
}

// Exemplo de uso
playCraps();
