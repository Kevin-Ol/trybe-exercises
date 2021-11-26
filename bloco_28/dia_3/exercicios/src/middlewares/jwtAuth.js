const secret = 'suadaçsdmajsdnaga';
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  const { id } = req.params;
  if (!authorization) return res.status(400).json('Token não encontrado ou informado');

  try {
    const { data } = jwt.verify(authorization, secret)
    if (data.id !== id) return res.status(401).json('Acesso negado');
    req.user = data;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json('Acesso negado');
  }
};
