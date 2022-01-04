const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (plant, collection, dbConfig) => {
  const db = await connection(dbConfig);
  await db.collection(collection).insertOne(plant);
};
