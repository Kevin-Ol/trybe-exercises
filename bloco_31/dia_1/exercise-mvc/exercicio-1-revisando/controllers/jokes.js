const jokeModel = require('../model/joke');

async function listJokes (_req, res) {
  const joke = await jokeModel.getJokes();
  
  return res.render('joke', { joke })
}

module.exports = {
  listJokes
}
