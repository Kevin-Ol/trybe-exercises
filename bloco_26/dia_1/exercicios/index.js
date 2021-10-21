const readline = require('readline-sync');
const imc = require('./imc');
const sorteio = require('./sorteio');
const velocidade = require('./velocidade');

function script() {
  const script = readline.question(
    `Escolha uma função:
    1 - imc
    2 - velocidade
    3 - sorteio
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
  }
}

script();
