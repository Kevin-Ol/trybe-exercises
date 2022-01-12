const axios = require('axios').default;

const CATEGORIES_URL = 'https://api.chucknorris.io/jokes/categories';

async function getCategories () {
  const { data: categories } = await axios.get(CATEGORIES_URL);

  return categories
}

module.exports = {
  getCategories
}
