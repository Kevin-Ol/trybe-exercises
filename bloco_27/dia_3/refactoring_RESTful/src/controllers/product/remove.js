const express = require("express");
const services = require('../../services/product');
const errorTypes = require("../../utils/errorTypes");

/** @type  {express.Handler}*/

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!Number.isInteger(parseInt(id))) {
      return next(errorTypes.invalidId);
    }

    const product = await services.remove(parseInt(id));
  
    if (!product) {
      return next(errorTypes.unregistredProduct);
    }
  
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
}
