const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const result = arrays.reduce((acc, current) => {
      current.forEach((element) => acc.push(element))
      return acc
  }, [])
  return result
}
// console.log(flatten())
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  const allAuthorsNames =  books
                            .map((book) => book.author.name)
                            .reduce((acc, current) => {
                              return `${acc}, ${current}`
                            })     
  return `${allAuthorsNames}.`
}

assert.strictEqual(reduceNames(), expectedResult2);

const expectedResult3 = 43;

function averageAge() {
  // escreva seu código aqui
  const authorsAges = books.map((book) => book.releaseYear - book.author.birthYear);
  const averageAge = authorsAges.reduce((acc, current) => acc + current) / authorsAges.length;
  return averageAge
}

assert.strictEqual(averageAge(), expectedResult3);



