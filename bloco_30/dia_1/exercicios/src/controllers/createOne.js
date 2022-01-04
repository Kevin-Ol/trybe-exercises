const { StatusCodes } = require('http-status-codes');
const plantsServices = require('../services')


module.exports = async (req, res, next) => {
  try {
    await plantsServices.createOne(req.body);

    return res.status(StatusCodes.CREATED).end();
  } catch (error) {
    return next(error);
  }
}
