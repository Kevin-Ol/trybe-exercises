const { errorTypes } = require("../utils/errorTypes");

function cepValidator(req, _res, next) {
  const { cep } = req.params;

  const cepRegex = /^\d{5}-?\d{3}$/;

  if (typeof cep !== 'string' || !cepRegex.test(cep)) {
    return next(errorTypes.invalidCep);
  }

  next();
}

module.exports = { cepValidator }
