const axios = require('axios');

exports.price = async (req, res, next) => {
  const token = req.headers.authorization;
  const regexToken = /^[A-Za-z0-9]{12}$/;

  if (!token || !regexToken.test(token)) {
    return res.status(400).json({ "message": "invalid token" })
  }

  try {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json);';
    const apiResponse = await axios(url);
    return res.status(200).json(apiResponse.data);
  } catch (error) {
    return res.status(400).json({ "message": error.message });
  }
}
