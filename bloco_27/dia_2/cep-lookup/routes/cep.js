const { Router } = require('express');
const { cepValidator } = require('../middlewares/cepValidator');
const { getByCep } = require('../controllers/cep')

const cepRoutes = Router();

cepRoutes.get('/:cep', cepValidator, getByCep)

module.exports = { cepRoutes }
