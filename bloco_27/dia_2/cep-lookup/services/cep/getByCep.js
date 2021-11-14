const model = require('../../model/cepMySQL')

async function getByCep(cep) {
  const cepWhithoutHyphen = cep.replace('-', '');

  const data = await model.get(cepWhithoutHyphen);
  const cepWithHyphen = data.cep.slice(0, 5) + '-' + data.cep.slice(5);

  return {...data, cep: cepWithHyphen};
}

module.exports = { getByCep };
