const model = require('../../model/cepMySQL');
const api = require('../../model/cepAPI/get');


async function getByCep(reqCep) {
  const cepWhithoutHyphen = reqCep.replace('-', '');
  const dataSQL = await model.get(cepWhithoutHyphen);

  if (dataSQL) {
    const cepWithHyphen = dataSQL.cep.slice(0, 5) + '-' + dataSQL.cep.slice(5);
    return {...dataSQL, cep: cepWithHyphen};
  }

  const dataAPI =  await api.get(reqCep);

  if(dataAPI.erro) {
    return null;
  }

  const { cep, logradouro, bairro, localidade, uf } = dataAPI;
  await model.post(cepWhithoutHyphen, logradouro, bairro, localidade, uf);

  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = { getByCep };
