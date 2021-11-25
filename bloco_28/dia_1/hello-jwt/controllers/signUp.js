const joi = require('joi');
const jwt = require('jsonwebtoken');
const findUser = require('../models/findUser')
const postUser = require('../models/postUser')

const loginValidation = joi.object({
  username: joi.string().alphanum().min(5).required(),
  password: joi.string().min(5).required(),
})

const secret = 'suadaçsdmajsdnaga';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256'
}

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const { error } = loginValidation.validate(req.body);

  if (error) return res.status(401).json({ error: { message: error.message } });

  const userExists = await findUser(username)

  if (userExists) return res.status(401).json({ error: { message: 'user already exists' } });

  let admin = false;

  if (Math.floor(Math.random() * 100) > 50) admin = true

  await postUser( { username, password, admin } )

  const token = jwt.sign({ data: {username, admin} }, secret, jwtConfig);

  return res.status(200).json({ token });
};
