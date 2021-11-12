const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const serialize = (bookData) => ({
  id: bookData._id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const db = await connection();
  const books = await db.collection('books').find().toArray();
  return books.map(serialize);
};

const getByAuthorId = async (id) => {
  const db = await connection();
  const book = await db.collection('books').find({ author_id: id }).toArray();
  return book.length ? serialize(book[0]) : null;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) {
      return null;
  }

  const db = await connection();
  const book = await db.collection('books').findOne(new ObjectId(id));

  if (!book) return null;


  return serialize(book);
};

const isValid = async (title, author_id) => {
  if (typeof title !== 'string' || title.length < 3) return false;
  if (!ObjectId.isValid(author_id)) return false;
  console.log(ObjectId.isValid(author_id))
  const db = await connection();
  const book = await db.collection('authors').findOne(new ObjectId(author_id));
  return book ? true : false;
};

const create = async (title, author_id) => {
  const db = await connection();
  await db.collection('books').insertOne({title, author_id});
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create,
}