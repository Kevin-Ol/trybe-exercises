const categoriesModel = require('../models/categories');

async function getCategories(_req, res) {
  const categories = await categoriesModel.getCategories();

  res.render('categories/index', { categories });
}

async function redirectCategories(_req, res) {
  res.redirect('categories');
}

module.exports = {
  getCategories,
  redirectCategories
}
