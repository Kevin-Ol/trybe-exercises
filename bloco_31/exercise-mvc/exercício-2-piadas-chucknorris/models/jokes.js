const axios = require('axios').default;

const RANDOM_JOKE_URL = 'https://api.chucknorris.io/jokes/random';
const CATEGORY_JOKE_URL = 'https://api.chucknorris.io/jokes/random?category=';

async function randomJoke () {
  const { data: { value: joke } } = await axios.get(RANDOM_JOKE_URL);

  return joke;
}

async function categoryJoke (category) {
  const { data: { value: joke } } = await axios.get(`${CATEGORY_JOKE_URL}${category}`);

  return joke;
}

module.exports = {
  randomJoke,
  categoryJoke
}
