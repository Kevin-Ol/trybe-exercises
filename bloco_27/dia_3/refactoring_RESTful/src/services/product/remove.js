// const ProductModel = require('../../models/productModel');
const ProductModel = require('../../models/productModelMongo');
const errorTypes = require("../../utils/errorTypes");

module.exports = async (id) => {
  const productExists = await ProductModel.getById(id);

  if (!productExists) {
    return { error: errorTypes.unregistredProduct }
  }

  const product = await ProductModel.exclude(id);

  return product;
}
