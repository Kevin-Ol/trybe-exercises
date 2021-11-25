const jwt = require('jsonwebtoken');
const findUser = require('../models/findUser');
const secret = 'suadaçsdmajsdnaga';


module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({
    "error": {
      "message": "Token not found"
    }
  });

  try {
    const { data } = jwt.verify(authorization, secret)
    const user = await findUser(data.username)
    req.user = user
    next();
  } catch (error) {
    return res.status(401).json({
      "error": {
        "message": error.message
      }
    })
  }
};
