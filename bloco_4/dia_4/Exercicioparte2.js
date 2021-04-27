function palindromo (palavra) {
    let resultado = '';
    for (let word = (palavra.length - 1); word >= 0 ; word -=1 ){
        resultado = resultado + palavra[word]
    };
    console.log(resultado);
    if (resultado === palavra) {
        return true
    } else {
        return false
    };
};

console.log(palindromo('desenvolvimento'))

function maiorValor (array) {
    maior = 0
    for (number in array) {
        if (array[number] > array[maior]) {
            maior = number
        };
    };
    return maior
};

console.log(maiorValor([2, 3, 6, 7, 10, 1]))