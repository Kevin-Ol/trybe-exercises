// Exercício 1

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(false);

//   Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const order = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens
}

order()

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);

//   Exercício Bonus
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);

  