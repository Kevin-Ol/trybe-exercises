// const ProductModel = require('../../models/productModel');
const ProductModel = require('../../models/productModelMongo');

module.exports = async (product) => {
  const { name, brand } = product;

  const newProduct = await ProductModel.add(name, brand);

  return newProduct;
}
