const express = require("express");
const Joi = require('joi');
const errorTypes = require('../utils/errorTypes')

/** @type  {express.ErrorRequestHandler}*/

module.exports = async (error, req, res, next) => {
  if(Joi.isError(error)) {
    const joiDetails = error.details[0];
    const { code, message } = errorTypes.joiValidation(joiDetails.message);
    return res.status(code).json({ message });
  }

  if (error.message) {
    const { code, message } = error;
    return res.status(code).json({ message });
  }
  
  console.log(error);

  const { code, message } = errorTypes.internalError;

  return res.status(code).json({ message });
}
