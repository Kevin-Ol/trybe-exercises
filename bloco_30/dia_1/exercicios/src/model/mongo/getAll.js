const connection = require('./connection');

module.exports = async (collection, dbConfig) => {
  const db = await connection(dbConfig);
  const plants = await db.collection(collection).find().toArray();
  return plants;
};
