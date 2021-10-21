const readline = require('readline-sync');
const imc = require('./imc');
const sorteio = require('./sorteio');
const velocidade = require('./velocidade');
const fatorial = require('./fatorial');
const fibonacci = require('./fibonacci');

function script() {
  const script = readline.question(
    `Escolha uma função:
    1 - imc
    2 - velocidade
    3 - sorteio
    4 - fatorial
    5 - fibonacci
    `
  );
  switch(script) {
    case('1'): 
      imc();
      break;
    case('2'): 
      velocidade();
      break;
    case('3'): 
      sorteio();
      break;
    case('4'): 
      fatorial();
      break;
    case('5'): 
      fibonacci();
      break;
    default:
      console.log('Opção inválida');
  }
}

script();
