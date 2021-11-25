const jwt = require('jsonwebtoken');
const secret = 'suadaçsdmajsdnaga';


module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({
    "error": {
      "message": "Token not found"
    }
  });

  try {
    const { data } = jwt.verify(authorization, secret)
    req.user = data
    next();
  } catch (error) {
    return res.status(401).json({
      "error": {
        "message": error.message
      }
    })
  }
};
