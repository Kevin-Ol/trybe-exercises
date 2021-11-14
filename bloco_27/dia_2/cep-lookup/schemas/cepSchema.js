const Joi = require('joi');

const cepRegex = /^\d{5}-\d{3}$/

const cepSchema = Joi.object({
  cep: Joi.string().pattern(cepRegex).required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().length(2).required()
})

module.exports = { cepSchema }
