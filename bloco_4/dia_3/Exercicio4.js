let numero = 9;

for (let linha = 0; linha < (numero - 2); linha += 1) {
    console.log(' '.repeat(numero - linha - 3) + '*'.repeat(1 + 2 * linha ) + ' '.repeat(numero - linha - 3))
}

