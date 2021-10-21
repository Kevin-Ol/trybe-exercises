const readline = require('readline-sync');

function imc() {
  const peso = readline.questionFloat('Digite seu peso: ');
  const altura = readline.questionFloat('Digite sua altura: ');
  const imc = (peso / (altura ** 2)).toFixed(2);
  if (imc < 18.5) {
    console.log(`imc: ${imc} - Abaixo do peso (magreza)`);
  }
  if (imc < 24.9) {
    console.log(`imc: ${imc} - Peso normal`);
  }
  if (imc < 29.9) {
    console.log(`imc: ${imc} - Acima do peso (sobrepeso)`);
  }
  if (imc < 34.9) {
    console.log(`imc: ${imc} - Obesidade grau I`);
  }
  if (imc < 39.9) {
    console.log(`imc: ${imc} - Obesidade grau II`);
  }
  console.log(`imc: ${imc} - Obesidade graus III e IV`);
}

module.exports = imc;

