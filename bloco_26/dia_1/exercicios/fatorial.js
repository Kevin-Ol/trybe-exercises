const readline = require('readline-sync');

function fatorial(numero) {
  if (numero > 1) {
    return numero * fatorial(numero - 1) ;
  }
  return numero;
}

function inputFatorial() {
  const numero = readline.questionInt('Digite um número inteiro maior que 0: ');
  if (typeof numero !== 'number' || numero <= 0 || !Number.isInteger(numero)) {
    console.log(`${numero} é um caractere inválido! Insira um número inteiro maior que zero`);
    return;
  }
  console.log(fatorial(numero));
}

module.exports = inputFatorial;
