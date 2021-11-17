const ProductModel = require('../../models/productModel');

module.exports = async (id) => {
  const product = await ProductModel.exclude(id);

  return product;
}
