module.exports = (req, res) => {
  const { user } = req;
  return res.status(200).json(user);
};
