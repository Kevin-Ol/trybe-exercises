const joi = require('joi');
const jwt = require('jsonwebtoken');

const loginValidation = joi.object({
  username: joi.string().alphanum().min(5).required(),
  password: joi.string().min(5).required(),
})

const secret = 'suadaçsdmajsdnaga';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256'
}

module.exports = (req, res) => {
  const { username, password } = req.body;

  const { error } = loginValidation.validate(req.body);

  if (error) return res.status(401).json({ error: { message: error.message } });

  const admin = (password === 's3nh4S3gur4???' && username === 'admin');

  const token = jwt.sign({ data: {username, admin} }, secret, jwtConfig);

  return res.status(200).json({ token });
};
