// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

const { expect } = require('chai');
const number = require('../number');

describe('Funcao number', () => {
  it('Retorna negativo para números negativos', () => {
    const expected = number(-1);

    expect(expected).to.be.equals('negativo');
  });

  it('Retorna positivo para números positivos', () => {
    const expected = number(1);

    expect(expected).to.be.equals('positivo');
  });

  it('Retorna neutro para número 0', () => {
    const expected = number(0);

    expect(expected).to.be.equals('neutro');
  });

  it('Retorna mensagem caso não seja inserido um número', () => {
    const expected = number('0');

    expect(expected).to.be.equals('o valor deve ser um número');
  })

});
