
function conversor(string) {
    let romanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let resultado = 0;
    for (let index = 0; index < string.length ; index +=1) {
        if (romanos[string[index]] < romanos[string[index +1]]){
            resultado -= romanos[string[index]]
        } else {
            resultado += romanos[string[index]]
        };

    };
    return resultado;
};

console.log(conversor('MMMCMLXIV'));



function number (num1, num2) {
    let primeiro = num1.toString();
    let segundo = num2.toString();
    let resultado = ''
    for (let index = 1; index <= primeiro.length && segundo.length; index += 1){
        let soma = Number(primeiro[primeiro.length - index]) + Number(segundo[segundo.length - index])
        console.log(soma)
        resultado = soma + resultado
    }
    return resultado
}

console.log(number('122', '81'))
