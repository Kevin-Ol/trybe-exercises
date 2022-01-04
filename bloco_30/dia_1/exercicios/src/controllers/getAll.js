const { StatusCodes } = require('http-status-codes');
const plantsServices = require('../services')

module.exports = async (_req, res, next) => {
  try {
    const plants = await plantsServices.getAll();

    return res.status(StatusCodes.OK).json(plants)
  } catch (error) {
    return next(error);
  }
}
