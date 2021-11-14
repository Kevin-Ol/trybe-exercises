const connection = require('./connection');

async function post(cep, logradouro, bairro, localidade, uf) {
  await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf]
  );
  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = { post };
