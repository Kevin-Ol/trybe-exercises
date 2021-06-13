const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5
// console.log(...randomNumbers)
// console.log(randomNumbers)

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'Limão', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Granulado', 'Castanha'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const result = [ ...fruit, ...additional ]
  return result
};

console.log(fruitSalad(specialFruit, additionalItens));

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática
  console.log(student)

  ////////////////////////////////////////////////////////////////////

  const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [string, funcao] = saudacoes
funcao(string)

///////////////////////////////////////////////////////////////////////

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[animal, bebida, comida] = [comida, animal, bebida]
console.log(comida, animal, bebida)

///////////////////////////////////////////////////////////////////////

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares)

/////////////////////////////////////////////////////////////////////////

const getNationality = ({ firstName, nationality }) => {
    if (nationality === undefined) {
        return `${firstName} is ${nationality = 'Brazilian'}`;
    }
    return `${firstName} is ${nationality}`;
}

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//////////////////////////////////////////////////////////////////////////////////////

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,});
  
  console.log(getPosition(-19.8157, -43.9542));

  //////////////////////////////////////////////////////////////////////////////////////

  const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    const result = number * value;
    return result
  };
  
  console.log(multiply(8));