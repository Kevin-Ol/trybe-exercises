const express = require("express");
const services = require('../../services/product');
const errorTypes = require("../../utils/errorTypes");
const checkValidId = require('../../utils/checkValidId');
const { StatusCodes } = require('http-status-codes');

/** @type  {express.Handler}*/

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    // if (!Number.isInteger(parseInt(id))) {
    //   return next(errorTypes.invalidId);
    // }

    if (!checkValidId(id)) {
      return next(errorTypes.invalidMongoId);
    }

    // const product = await services.remove(parseInt(id));
    const product = await services.remove(id);
  
    if (product.error) {
      return next(errorTypes.unregistredProduct);
    }
  
    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    return next(error);
  }
}
