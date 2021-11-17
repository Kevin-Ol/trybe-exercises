// const ProductModel = require('../../models/productModel');
const ProductModel = require('../../models/productModelMongo');

module.exports = async (id) => {
  const product = await ProductModel.getById(id);

  return product;
}
