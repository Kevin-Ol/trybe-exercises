const axios = require('axios');

const apiURL = (cep) => `https://viacep.com.br/ws/${cep}/json/ `;

async function get(cep) {
  try {
    const { data } = await axios.get(apiURL(cep));
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = { get };
