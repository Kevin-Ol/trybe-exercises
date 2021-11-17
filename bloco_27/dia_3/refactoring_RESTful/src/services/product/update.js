const express = require("express");
// const ProductModel = require('../../models/productModel');
const ProductModel = require('../../models/productModelMongo');
const errorTypes = require("../../utils/errorTypes");

/** @type  {express.Handler}*/

module.exports = async (product) => {
  const { id, name, brand } = product;

  const productExists = await ProductModel.getById(id);

  if (!productExists) {
    return { error: errorTypes.unregistredProduct }
  }

  await ProductModel.update(id, name, brand);

  return product;
}
