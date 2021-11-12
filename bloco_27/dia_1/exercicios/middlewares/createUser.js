const user = require("../models/User");


async function createUser(req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  const validations = user.isValid(firstName, lastName, email, password)
  if(validations.error) {
    return res.status(400).json(validations);
  }

  const newUser = await user.create(firstName, lastName, email, password);
  return res.status(201).json(newUser)
}

module.exports = { createUser }
