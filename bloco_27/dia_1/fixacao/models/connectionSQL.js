const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'kevin',
    password: '10203040',
    database: 'model_example' });

module.exports = connection;
