let numero = 7;

//for (let linha = 0; linha < (numero - 2); linha += 1) {
//    console.log(' '.repeat(numero - linha - 3) + '*'.repeat(1 + 2 * linha ) + ' '.repeat////(numero - linha - 3))
//}

let linha = ''
let espaco = ' '
let asterisco = '*'

for (let index = 1; index <= numero; index += 1) {
    if (index === ((numero + 1) / 2)) {
        linha = linha + asterisco
    } else {
        linha = linha + espaco
    }
}
console.log(linha)