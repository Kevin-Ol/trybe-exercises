const user = require("../models/User");


async function getUsers(_req, res, _next) {
  const users = await user.getAll();
  return res.status(200).send(users)
}

module.exports = { getUsers }
