const connection = require('./connection');

async function get(cep) {
  const [cepInfo] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
  return cepInfo.length ? cepInfo[0] : null;
}

module.exports = { get };
