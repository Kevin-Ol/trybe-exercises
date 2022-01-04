const { MongoClient } = require('mongodb');

let db = null;

const connection = ({ MONGO_DB_URL, DB_NAME, OPTIONS }) => (db || MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
);

module.exports = connection;