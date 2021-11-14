const model = require('../../model/cepMySQL')

async function getByCep(cep) {
  const data = await model.get(cep);
  return data;
}

module.exports = { getByCep };
