const express = require("express");
const services = require('../../services/product');
const productSchema = require('../../schemas/product');
const errorTypes = require('../../utils/errorTypes');
const { StatusCodes } = require('http-status-codes');


/** @type  {express.Handler}*/

module.exports = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const { error }  = await productSchema.validate(req.body);
  
    if(error) {
      return next(error);
    }
  
    const newProduct = await services.create({name, brand});
  
    if (!newProduct) {
      return errorTypes.failedCreatingProduct;
    }
    
    return res.status(StatusCodes.CREATED).json({newProduct});
  } catch (error) {
    next(error);
  }
}
