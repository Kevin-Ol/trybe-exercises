const connection = require('./connection');

async function get(cep) {
  const [cepInfo] = await connection.execute('SELECT cep FROM ceps WHERE cep = ?', [cep]);
  return cepInfo.length ? cepInfo : null;
}

module.exports = { get };
