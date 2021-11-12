const user = require("../models/User");


async function editUser(req, res, _next) {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const validations = user.isValid(firstName, lastName, email, password)
  if(validations.error) {
    return res.status(400).json(validations);
  }

  const updatedUser = await user.update(id, req.body)

  if (!updatedUser) {
    return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    })
  }

  
  return res.status(200).send(updatedUser)
}

module.exports = { editUser }
