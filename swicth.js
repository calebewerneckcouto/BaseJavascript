const diaDaSemana = 3;
let mensagem;

switch (diaDaSemana) {
  case 1:
    mensagem = "Segunda-feira";
    break;
  case 2:
    mensagem = "Terça-feira";
    break;
  case 3:
    mensagem = "Quarta-feira";
    break;
  case 4:
    mensagem = "Quinta-feira";
    break;
  case 5:
    mensagem = "Sexta-feira";
    break;
  case 6:
  case 7:
    mensagem = "Fim de semana";
    break;
  default:
    mensagem = "Dia inválido";
}

console.log(`Hoje é ${mensagem}.`);
