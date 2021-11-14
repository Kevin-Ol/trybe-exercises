const errorTypes = {
  invalidCep: { "error": { "code": "invalidData", "message": "CEP inválido" } },
  cepNotFound: { "error": { "code": "notFound", "message": "CEP não encontrado" } },
}

const httpCodes = {
  invalidData: 400,
  notFound: 404
}

module.exports = { errorTypes, httpCodes }
