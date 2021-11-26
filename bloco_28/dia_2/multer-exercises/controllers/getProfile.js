const model = require('../model');

module.exports = async (req, res) => {
  const { id } = req.params;
  const profile = await model.readProfile(id);
  if (!profile) return res.status(404).json({ error: { message: 'Perfil não encontrado' } });
  return res.status(200).json(profile);
};
