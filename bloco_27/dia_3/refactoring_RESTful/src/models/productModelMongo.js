const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    const db = await connection();
    const newProduct = await db.collection('products').insertOne({name, brand});
    return { id: newProduct.insertedId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const products = await db.collection('products').find().toArray();
    return products;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const db = await connection();
    const products = await db.collection('products').findOne(new ObjectId(id));
    return products;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const db = await connection();
    const products = await db.collection('products').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: {name, brand} },
      { returnDocument: 'after' }
    );
    return products;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const db = await connection();
    const response = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
    return response
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
