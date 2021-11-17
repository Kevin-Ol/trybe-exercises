const ProductModel = require('../../models/productModel');

module.exports = async (id) => {
  const product = await ProductModel.getById(id);

  return product;
}
