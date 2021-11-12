const connection = require('./connectionSQL');


const serialize = (bookData) => ({
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  });


const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT id, title, author_id FROM model_example.books;',
    );
    return books.map(serialize);
};

const getByAuthorId = async (id) => {
    const [book] = await connection.execute(
        'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?;', [id]
    );
    return book.length ? serialize(book[0]) : null;
};

const getById = async (id) => {
    const [book] = await connection.execute(
        'SELECT id, title, author_id FROM model_example.books WHERE id = ?;', [id]
    );
    return book.length ? serialize(book[0]) : null;
};

const isValid = async (title, author_id) => {
    if (typeof title !== 'string' || title.length < 3) return false;
    if (typeof author_id !== 'number') return false;

    const [book] = await connection.execute(
        'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?;', [author_id]
    );
    
    return book.length ? true : false;
};

const create = async (title, author_id) => connection.execute(
        'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',[title, author_id]
    );

module.exports = {
    getAll,
    getByAuthorId,
    getById,
    isValid,
    create
};
