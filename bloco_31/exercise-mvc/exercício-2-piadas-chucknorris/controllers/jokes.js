const jokesModel = require('../models/jokes');

async function getRandomJoke(_req, res) {
  const joke = await jokesModel.randomJoke();

  res.render('jokes/index', { joke });
}

async function getCategoryJoke(req, res) {
  const { category } = req.params;
  const joke = await jokesModel.categoryJoke(category);

  res.render('jokes/index', { joke });
}

module.exports = {
  getRandomJoke,
  getCategoryJoke
}
