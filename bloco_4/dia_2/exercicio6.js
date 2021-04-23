let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;
let valores = [];

for (let number of numbers){
    if (number % 2 != 0) {
        impares += 1;
        valores.push(number)
    }
}

if (impares == 0) {
    console.log('Nenhum valor ímpar encontrado')
} else {
    console.log(valores)
}