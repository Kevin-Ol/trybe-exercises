const user = require("../models/User");


async function getUserById(req, res, _next) {
  const { id } = req.params;
  const userFound = await user.getById(id);

  if (!userFound) {
    return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
  })
  }
  
  return res.status(200).send(userFound)
}

module.exports = { getUserById }
