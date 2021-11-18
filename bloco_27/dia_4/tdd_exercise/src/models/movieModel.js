const mongoConnection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
    title, 
    directedBy, 
    releaseYear
  };
};

const getById = async (reqId) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movie = await moviesCollection.findOne(new ObjectId (reqId));
  
  if (movie) {
    const { _id: id, ...rest } = movie;

    return { id, ...rest }
  }
  return null;
}

module.exports = {
  create,
  getAll,
  getById,
};
