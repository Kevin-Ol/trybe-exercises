const User = require('../models/user');
const jwt = require('jsonwebtoken');

const secret = 'suadaçsdmajsdnaga';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256'
}

module.exports = async (req, res) => {
  try {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);

  if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  const token = jwt.sign({data: {username, id: user._id}}, secret, jwtConfig)

  return res.status(200).json({token});
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
