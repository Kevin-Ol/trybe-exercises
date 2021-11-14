const errorTypes = {
  invalidCep: { "error": { "code": "invalidData", "message": "CEP inválido" } },
  cepNotFound: { "error": { "code": "notFound", "message": "CEP não encontrado" } },
  cepAlreadyExists: { "error": { "code": "alreadyExists", "message": "CEP já existente" } }
}

const httpCodes = {
  invalidData: 400,
  notFound: 404,
  alreadyExists: 409,
}

module.exports = { errorTypes, httpCodes }
