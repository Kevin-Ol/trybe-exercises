const connection = require("./connection");
const { ObjectId } = require('mongodb');

function isValid(firstName, lastName, email, password) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (typeof firstName !== 'string') {
    return {
      error: true,
      message: "O campo 'firstName' deve conter um texto"
    }
  };
  if (typeof lastName !== 'string') {
    return {
      "error": true,
      "message": "O campo 'lastName' deve conter um texto"
    }
  };
  if (typeof email !== 'string' || !emailRegex.test(email)) {
    return {
      "error": true,
      "message": "O campo 'email' deve ser no formato email@email.com"
    }
  };
  if (typeof password !== 'string' || password.length < 6) {
    return {
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
  };

  return true;
}

function serialize(user) {
  return {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  }
}

async function create(firstName, lastName, email, password) {
  const db = await connection();
  const newUser = await db.collection('users').insertOne({firstName, lastName, email, password})
  return { id: newUser.insertedId, firstName, lastName, email };
}

async function getAll() {
  const db = await connection();
  const users = await db.collection('users').find().toArray();
  return users;
}

async function getById(id) {
  if(!ObjectId.isValid(id)) {
    return null
  }

  const db = await connection();
  const user = await db.collection('users').findOne(new ObjectId(id));
  return user ? serialize(user) : null ;
}

async function update(id, fields) {
  if(!ObjectId.isValid(id)) {
    return null
  }

  const db = await connection();
  const { value } = await db.collection('users').findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: fields },
    { returnDocument: 'after' }
  );
  return value ? serialize(value) : null ;
}

module.exports = {
  isValid,
  create,
  getAll,
  getById,
  update,
}