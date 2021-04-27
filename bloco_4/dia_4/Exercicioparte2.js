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
