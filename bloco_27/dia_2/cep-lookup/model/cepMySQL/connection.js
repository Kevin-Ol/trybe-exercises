const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost',
  user: 'kevin',
  password: '10203040',
  database: 'cep_lookup',
});

module.exports = connection;
