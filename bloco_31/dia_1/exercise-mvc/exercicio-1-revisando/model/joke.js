const axios = require('axios').default;
const JOKES_URL = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'


async function getJokes() {
  const { data: { joke } } = await axios.get(JOKES_URL);

  return joke;
}

module.exports = {
  getJokes
}
