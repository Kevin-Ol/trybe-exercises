const ProductModel = require('../../models/productModel');

module.exports = async (product) => {
  const { name, brand } = product;

  const newProduct = await ProductModel.add(name, brand);

  return newProduct;
}
