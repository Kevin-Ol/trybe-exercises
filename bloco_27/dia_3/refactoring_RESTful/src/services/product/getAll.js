// const ProductModel = require('../../models/productModel');
const ProductModel = require('../../models/productModelMongo');

module.exports = async () => {
  const products = await ProductModel.getAll();

  return products;
}
