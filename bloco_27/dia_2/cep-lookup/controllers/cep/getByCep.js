const services = require('../../services/cep');
const { errorTypes } = require('../../utils/errorTypes');

async function getByCep(req, res, next) {
  try {
    const { cep } = req.params;

    const cepInfo = await services.getByCep(cep);
  
    if(!cepInfo) {
      return next(errorTypes.cepNotFound);
    }
  
    return res.status(200).json(cepInfo);
  } catch (error) {
    next(error);
  }
}

module.exports = { getByCep }
