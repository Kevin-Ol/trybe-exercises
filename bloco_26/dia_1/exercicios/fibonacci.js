const readline = require('readline-sync');

function fibonacci() {
  const numero = readline.questionInt('Digite um número inteiro maior que 0: ');
  if (typeof numero !== 'number' || numero < 0 || !Number.isInteger(numero)) {
    console.log(`${numero} é um caractere inválido! Insira um número inteiro maior que zero`);
    return;
  }
  const array = [1, 1]
  for(let elemento = 0; elemento < numero - 2; elemento += 1) {
    const result = array[array.length - 1] + array[array.length - 2];
    array.push(result);
  }
  if(numero === 1) array.shift();
  console.log(array);
}

module.exports = fibonacci;

