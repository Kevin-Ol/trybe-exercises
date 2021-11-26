const User = require('../models/user');

module.exports = async (req, res, next) => {
  const { username } = req.user;
  const user = await User.findUser(username)
  res.status(200).json(user);
};
