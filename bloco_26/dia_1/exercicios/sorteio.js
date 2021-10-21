const readline = require('readline-sync');

function sorteio() {
  const numero = Math.floor((Math.random() * 11));
  const input = readline.questionInt('Digite um número de 0 a 10: ');
  if (numero === input) {
    console.log('Parabéns, você acertou!');
  } else {
    console.log(`Que pena você errou! O número sorteado foi: ${numero}`)
  }
  const novamente = readline.question('Deseja jogar novamente? Sim(s) ou Não(n)?');
  if (novamente === 's') {
    sorteio();
  }
}

module.exports = sorteio;
