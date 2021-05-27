const assert = require('assert');

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

const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
  function formatedBookNames() {
    // escreva seu código aqui
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  }
  
  assert.deepStrictEqual(formatedBookNames(), expectedResult);

  const expectedResult2 = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
  function nameAndAge() {
    // escreva seu código aqui
    const ages = books.map((book) => {
        return {
            age: (book.releaseYear - book.author.birthYear),
            author: book.author.name
        }
    })
    return ages.sort((a, b) => a.age - b.age)
  }
  
  assert.deepStrictEqual(nameAndAge(), expectedResult2);

  const expectedResult3 = [
    { 
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
  ];
  
  function fantasyOrScienceFiction() {
    // escreva seu código aqui
    return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  }
  
  assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

  const expectedResult4 = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
  
  function oldBooksOrdered() {
    // escreva seu código aqui
    const booksOver60 = books.filter((book) => book.releaseYear < (2021 -60));
    return booksOver60.sort((a, b) => a.releaseYear - b.releaseYear)
  }
  
  assert.deepStrictEqual(oldBooksOrdered(), expectedResult4);

  const expectedResult5 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui
    const fantasyOrScienceFictionBooks = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
    const fantasyOrScienceFictionAuthors = fantasyOrScienceFictionBooks.map((book) => book.author.name);
    return fantasyOrScienceFictionAuthors.sort()
  }
  
  assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult5);

  const expectedResult6 = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  function oldBooks() {
    // escreva seu código aqui
    const booksOver60 = books.filter((book) => book.releaseYear < (2021 -60));
    return booksOver60.map((book) => book.name)
  }
  
  assert.deepStrictEqual(oldBooks(), expectedResult6);

  const expectedResult7 = 'O Senhor dos Anéis';

  function authorWith3DotsOnName() {
  // escreva seu código aqui
  const authorWith3DotsOnName =  books.filter((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.')
  return authorWith3DotsOnName[0].name
  }

  assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult7);

