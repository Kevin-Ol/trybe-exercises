const ProductModel = require('../../models/productModel');

module.exports = async () => {
  const products = await ProductModel.getAll();

  return products;
}
