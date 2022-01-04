const { StatusCodes } = require('http-status-codes');
const plantsServices = require('../services')

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = await plantsServices.overwritePlant(id, req.body);

    return res.status(StatusCodes.OK).json(plant)
  } catch (error) {
    return next(error);
  }
}
