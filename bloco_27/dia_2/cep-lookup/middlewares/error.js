const { httpCodes } = require("../utils/errorTypes");

function error(err, req, res, next) {
  if(err.isJoi) {
    const [ joiError ] = err.details
    return res.status(httpCodes["invalidData"]).json({
      "error": { "code": "invalidData", message: joiError.message }
    })
  }

  if(err.error) {
    const { code } = err.error;
    return res.status(httpCodes[code]).json(err.error)
  }

  console.log(err);

  return res.status(500).json({ "error": { "code": "internal", "message": "Erro interno" } })
}

module.exports = { error }
