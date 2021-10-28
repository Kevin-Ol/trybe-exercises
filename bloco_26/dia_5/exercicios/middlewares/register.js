const { validateEmail, validateUsername, validatePassword } = require('../helpers')

exports.register = (req, res, next) => {
  const { username, email, password } = req.body;

  if(!username || !email || !password) {
    return res.status(400).json({ "message": "invalid data" });
  }

  const checkUsername = validateUsername(username);
  const checkEmail = validateEmail(email);
  const checkPassword = validatePassword(password);

  if (!checkEmail || !checkUsername || !checkPassword) {
    return res.status(400).json({ "message": "invalid data" });
  }

  return res.status(200).json({ "message": "user created" });
};
