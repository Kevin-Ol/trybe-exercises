const readline = require('readline-sync');

function avg() {
  const distancia = readline.questionFloat('Digite a distância em metros: ');
  const tempo = readline.questionFloat('Digite o tempo em minutos: ');
  const velocidade = (distancia / (tempo * 60)).toFixed(2);
  console.log(`Velocidade: ${velocidade} m/s`);
}

module.exports = avg;
