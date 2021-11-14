const { httpCodes } = require("../utils/errorTypes");

function error(err, req, res, next) {
  if(err.error) {
    const { code } = err.error;
    return res.status(httpCodes[code]).json(err.error)
  }

  console.log(err);

  return res.status(500).json({ "error": { "code": "internal", "message": "Erro interno" } })
}

module.exports = { error }
