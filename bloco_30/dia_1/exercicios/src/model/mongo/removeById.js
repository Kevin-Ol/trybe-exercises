const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, collection, dbConfig) => {
  const db = await connection(dbConfig);
  await db.collection(collection).deleteOne({ _id: ObjectId(id) });
};
