module.exports = (req, res) => {
  const { admin } = req.user;

  if(admin) {
    return res.status(200).json(
      {
        "secretInfo": "Peter Parker é o Homem-Arannha"
      })
  }
  return res.status(403).json({
    "error": {
      "message": "Restricted access"
    }
  });
};
