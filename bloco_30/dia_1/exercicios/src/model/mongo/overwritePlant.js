const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, fields, collection, dbConfig) => {
  const db = await connection(dbConfig);
  const { value: updatedPlant } = await db.collection(collection).findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: fields },
    { returnDocument: "after" },
  );
  return updatedPlant;
};
