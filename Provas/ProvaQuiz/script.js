document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        'Quem foi que gritou "independência ou morte"?',
        "Qual é a capital da França?",
        "Qual é o maior planeta do nosso sistema solar?",
        "Qual é a atual capital do Brasil?"
    ];
    const alternativas = [
        ["Dom Pedro II", "Tiririca", "Dom Pedro I", "Zacarias"],
        ["Londres", "Paris", "Berlim", "Madrid"],
        ["Vênus", "Marte", "Júpiter", "Saturno"],
        ["Salvador", "Rio de Janeiro", "São Paulo", "Brasília"]
    ];
    const respostasCorretas = [2, 1, 2, 3];
    
    let perguntaAtual;

    function obterPerguntaAleatoria() {
        return Math.floor(Math.random() * perguntas.length);
    }

    function gerarPerguntas() {
        perguntaAtual = obterPerguntaAleatoria();
        document.getElementById("questoes").innerHTML = perguntas[perguntaAtual];
        
        const botoesAlternativas = document.querySelectorAll('button');
        botoesAlternativas.forEach((elemento, index) => {
            elemento.textContent = alternativas[perguntaAtual][index];
        });
    }

    function selecionarBotao() {
        const alternativas = document.querySelectorAll('.alternative');
    
        alternativas.forEach(botao => {
            botao.addEventListener('click', () => {
                const resposta = botao.value;
                verificarResposta(resposta);
            });
        });
    }

    function verificarResposta(resposta) {
        resposta = parseInt(resposta);
        let respostaElemento = document.getElementById("resposta");
        if (resposta === respostasCorretas[perguntaAtual]) {
            respostaElemento.innerHTML = "Acertou!!!";
        } else {
            respostaElemento.innerHTML = `Errou meu chapa, resposta correta: ${alternativas[perguntaAtual][respostasCorretas[perguntaAtual]]}`;
        }
        document.getElementById('reload').style.display = "block";
    }

    function inicializarQuiz() {
        gerarPerguntas();
        selecionarBotao();
        document.getElementById('reload').addEventListener('click', () => {
            location.reload();
        });
        document.getElementById('reload').style.display = "none";
    }

    // Inicializar o quiz quando a página carrega
    inicializarQuiz();
});
