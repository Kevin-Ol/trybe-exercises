let numero = 5;

//for (let linha = 1; linha <= numero; linha += 1) {
//    console.log('*'.repeat(linha))
//}

let asterisco = '*';
let linha = ''

for (let index = 0; index < numero; index +=1) {
    linha = linha + asterisco
    console.log(linha);
}