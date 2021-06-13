let numero = 3;

//for (let linha = 1; linha <= numero; linha += 1) {
//    console.log('*'.repeat(numero))
//}

let asterisco = '*'
let linha = ''

for (let index = 0; index < numero; index += 1) {
    linha = linha + asterisco;
};

for (let index = 0; index < numero; index += 1) {
    console.log(linha);
};