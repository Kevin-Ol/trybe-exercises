const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'exercicios27-1';

let db = null;

async function main() {
  try {
    await client.connect();
    db = client.db(dbName);
    return db;
  } catch (error) {
    console.log(error)
  }
}

async function connection() {
  return db ? db : await main();
}

module.exports = connection;
