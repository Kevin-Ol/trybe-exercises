const { StatusCodes } = require('http-status-codes');

module.exports = {
  joiValidation: (message) => ({
    code: StatusCodes.BAD_REQUEST,
    message,
  }),
  failedCreatingProduct: {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Internal server error',
  },
  internalError: {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Internal server error',
  },
  invalidId: {
    code: StatusCodes.BAD_REQUEST,
    message: 'Id is not a number',
  },
  unregistredProduct: {
    code: StatusCodes.NOT_FOUND,
    message: "Product not registered",
  },
  invalidMongoId: {
    code: StatusCodes.BAD_REQUEST,
    message: 'Invalid Id',
  }
}
