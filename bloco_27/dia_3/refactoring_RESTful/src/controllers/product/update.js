const express = require("express");
const services = require('../../services/product');
const productSchema = require('../../schemas/product');
const errorTypes = require('../../utils/errorTypes');
const { StatusCodes } = require('http-status-codes');


/** @type  {express.Handler}*/

module.exports = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const { id } = req.params;

    const { error }  = await productSchema.validate(req.body);
  
    if(error) {
      return next(error);
    }

    if (!Number.isInteger(parseInt(id))) {
      return next(errorTypes.invalidId);
    }
  
    const updatedProduct = await services.update({ id: parseInt(id), name, brand });
  
    if (updatedProduct.error) {
      return next(updatedProduct.error);
    }
    
    return res.status(StatusCodes.CREATED).json({updatedProduct});
  } catch (error) {
    next(error);
  }
}
