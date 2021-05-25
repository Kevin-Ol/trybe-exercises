const emailGenerator = (name) => {
    let email = `${name.split(' ').join('_').toLowerCase()}@trybe.com`
    const data = {
        nomeCompleto: name,
        email: email,
    }
    return data
} 

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(emailGenerator))
////////////////////////////Exercício 2////////////////////////////////////////////////////
const checkNumber = (number, callback) => {
    let random = Math.ceil((Math.random()*5));
    console.log(random)
    callback(number, random)
}

const printResults = (num1, num2) => {
    if (num1 === num2) {
        console.log('Parabéns você ganhou');
    } else {
        console.log('Tente novamente');
    }
}

// checkNumber(3, printResults)
////////////////////////////Exercício 3////////////////////////////////////////////////////
