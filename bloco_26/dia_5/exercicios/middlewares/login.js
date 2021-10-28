const { validateEmail, validatePassword } = require('../helpers');
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(6).toString('hex');
}

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({ "message": "email or password is incorrect" });
  }

  const checkEmail = validateEmail(email);
  const checkPassword = validatePassword(password);

  if (!checkEmail || !checkPassword) {
    return res.status(400).json({ "message": "email or password is incorrect" });
  }

  return res.status(200).json({ "token": generateToken() });
};
