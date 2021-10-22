// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const write = require('../write');


describe('Função write', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it(('Escreve no arquivo escolhido'), () => {
    const expected = write('test.txt', 'content');

    expect(expected).to.be.equals('ok');
  })
});
