let saldo = 1000;

        function realizarOperacao() {
            const operation = document.getElementById('operation').value;
            const amount = parseFloat(document.getElementById('amount').value);
            const resultParagraph = document.getElementById('result');
            
            try {
                let mensagem = '';

                if (operation === 'consultar') {
                    mensagem = `Saldo atual: R$ ${saldo.toFixed(2)}`;
                    resultParagraph.className = '';
                } else {
                    if (isNaN(amount) || amount <= 0) {
                        throw new Error('Por favor, insira um valor válido maior que zero.');
                    }

                    switch (operation) {
                        case 'sacar':
                            if (amount > saldo) {
                                throw new Error('Saldo insuficiente.');
                            } else {
                                saldo -= amount;
                                mensagem = `Saque realizado com sucesso! Saldo atual: R$ ${saldo.toFixed(2)}`;
                                resultParagraph.className = '';
                            }
                            break;
                        case 'depositar':
                            saldo += amount;
                            mensagem = `Depósito realizado com sucesso! Saldo atual: R$ ${saldo.toFixed(2)}`;
                            resultParagraph.className = '';
                            break;
                        default:
                            throw new Error('Operação inválida.');
                    }
                }
                
                resultParagraph.textContent = mensagem;
            } catch (error) {
                resultParagraph.textContent = error.message;
                resultParagraph.className = 'error';
            }
        }