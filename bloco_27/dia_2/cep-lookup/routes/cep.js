const { Router } = require('express');
const { cepValidator } = require('../middlewares/cepValidator');
const { getByCep, postNewCep } = require('../controllers/cep');

const cepRoutes = Router();

cepRoutes.get('/:cep', cepValidator, getByCep);

cepRoutes.post('/', postNewCep);

module.exports = { cepRoutes };
