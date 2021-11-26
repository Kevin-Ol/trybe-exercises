const model = require('../model');

module.exports = async (req, res) => {
  if (!req.file) return res.status(404).json({ message: 'Nenhum arquivo foi enviado' });
  const { name, email, password, bio } = req.body;
  const { filename } = req.file;
  console.log({ id: filename, name, email, password, bio });
  const profile = await model.createProfile({ id: filename, name, email, password, bio });
  return res.status(201).json(profile);
};
