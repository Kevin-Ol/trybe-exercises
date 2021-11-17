const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
})
