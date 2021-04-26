let numero = 7;

//for (let linha = 1; linha <= numero; linha += 1) {
//    console.log(' '.repeat(numero - linha) + '*'.repeat(linha))
//}

let simbolo = '*';
let vazio = ' '
let espacos = (numero - 1)

for (let index = 0; index < numero ; index +=1) {
    let linha = ''
    for (let asteriscos = 1; asteriscos <= numero; asteriscos +=1) {
        if (asteriscos > espacos) {
            linha = linha + simbolo;
        } else {
            linha = linha + vazio;
        };  
    };
    console.log(linha)
    espacos -= 1;
};



