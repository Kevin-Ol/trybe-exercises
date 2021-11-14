const { cepSchema } = require('../../schemas/cepSchema');
const services = require('../../services/cep');
const { errorTypes } = require('../../utils/errorTypes');

async function postNewCep(req, res, next) {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const { error } =  await cepSchema.validateAsync(req.body);

    if (error) {
      return next(error);
    }

    const cepInfo = await services.postCep(cep, logradouro, bairro, localidade, uf);
  
    if(!cepInfo) {
      return next(errorTypes.cepAlreadyExists);
    }
  
    return res.status(201).json(cepInfo);
  } catch (error) {
    next(error)
  }
}

module.exports = { postNewCep }
