const model = require('../../model/cepMySQL')

async function postCep(cep, logradouro, bairro, localidade, uf) {

  const cepWhithoutHyphen = cep.replace('-', '');

  const cepRegistered = await model.get(cepWhithoutHyphen);

  if(cepRegistered) {
    return null;
  }

  const cepInfo = await model.post(cepWhithoutHyphen, logradouro, bairro, localidade, uf);
  return cepInfo;
}

module.exports = { postCep };
