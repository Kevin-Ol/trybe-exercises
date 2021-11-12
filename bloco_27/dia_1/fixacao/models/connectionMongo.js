const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'model_example';

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
