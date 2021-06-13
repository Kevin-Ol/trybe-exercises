const assert = require('assert');
const { get } = require('http');

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

function authorBornIn1947() {
    // escreva aqui o seu código
    const element = books.find((element) => element.author.birthYear === 1947);
    return element.author.name;
  }
  
  assert.strictEqual(authorBornIn1947(), 'Stephen King');

  function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    const totalBooks = [];
    books.forEach((book) => totalBooks.push(book.name));
    totalBooks.sort((a, b) => a.length - b.length);
    nameBook = totalBooks[0];
  
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }
  
  assert.strictEqual(smallerName(), 'Duna');

const expectedResult3 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  function getNamedBook() {
    // escreva seu código aqui
    return books.find((book) => book.name.length === 26);
  }
  
  assert.deepStrictEqual(getNamedBook(), expectedResult3);

  const expectedResult4 = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
  ];
  
  function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return books.sort((a, b) => b.releaseYear - a.releaseYear);
  }
  
  assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult4);

  const expectedResult5 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000)
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult5);

const expectedResult6 = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990)
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult6);

const expectedResult7 = false;

function authorUnique() {
  // escreva seu código aqui
  let array = []
  books.forEach((element) => {
    array.push(books.some((element1) => element.author.birthYear === element1.author.birthYear && element.author.name !== element1.author.name))
 })
 return result = !array.find(element => element === true)
}

assert.strictEqual(authorUnique(), expectedResult7);