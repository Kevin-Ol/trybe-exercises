const { StatusCodes } = require('http-status-codes');
const plantsServices = require('../services')

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    await plantsServices.removeById(id);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    return next(error);
  }
}
