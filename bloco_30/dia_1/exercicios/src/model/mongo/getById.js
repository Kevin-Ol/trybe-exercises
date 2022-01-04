const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, collection, dbConfig) => {
  const db = await connection(dbConfig);
  const plant = await db.collection(collection).findOne({ _id: ObjectId(id) });
  return plant;
};
