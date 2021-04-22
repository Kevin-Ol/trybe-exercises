let salario = 5000;
let INSS;
let salarioBase;
let IR;
let salarioFinal;


if (salario < 0) {
    console.log("Valor inválido");
} else if (salario <= 1556.94) {
    INSS = 0.08 * salario;
} else if (salario <= 2594.92) {
    INSS = 0.09 * salario;
} else if (salario <= 5189.82) {
    INSS = 0.11 * salario;
} else if (salario > 5189.83) {
    INSS = 570.88
} else {
    console.log("Valor inválido");
}

salarioBase = salario - INSS

if (salarioBase <= 1903.98) {
    IR = 0;
} else if (salarioBase <= 2826.65) {
    IR = 0.075 * salarioBase - 142.80;
} else if (salarioBase <= 3751.05) {
    IR = 0.15 * salarioBase - 354.80;
} else if (salarioBase > 4664.68) {
    IR = 0.225 * salarioBase - 636.13;
} else {
    IR = 0.275 * salarioBase - 869.36;
}

salarioFinal = salarioBase - IR;
console.log(salarioFinal)