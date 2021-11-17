const express = require("express");
const services = require('../../services/product');
const { StatusCodes } = require('http-status-codes');

/** @type  {express.Handler}*/

module.exports = async (_req, res, next) => {
  try {
    const products = await services.getAll();

    return res.status(StatusCodes.OK).json({products});
  } catch (error) {
    next(error);
  }
}
