const express = require("express");
const services = require('../../services/product');
const errorTypes = require('../../utils/errorTypes');

/** @type  {express.Handler}*/

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!Number.isInteger(parseInt(id))) {
      return next(errorTypes.invalidId);
    }

    const product = await services.getById(parseInt(id));
  
    if (!product) {
      return next(errorTypes.unregistredProduct);
    }
  
    return res.status(200).json({product})
  } catch (error) {
    next(error);
  }
}
