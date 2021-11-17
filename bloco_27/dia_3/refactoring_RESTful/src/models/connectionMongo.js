const { MongoClient }= require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

const dbName = 'rest_exercicios'

let db = null

async function connection() {
  try {
    return db ? db : db = (await client.connect()).db(dbName);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connection;
